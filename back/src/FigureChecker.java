import java.io.IOException;

import static java.util.Objects.isNull;

public class FigureChecker {
    public FigureChecker(){

    }

    public boolean checkSpot(){
        try {
            String data = RequestHandler.handleRequest();
            float[] parsedData = JSONParser.parse(data);
            if (!isNull(parsedData)) {
                double x = parsedData[0];
                double y = parsedData[1];
                double r = parsedData[2];
                return checkAxis(x,y,r);
            }
        } catch (IOException e) {
            return false;
        }
        return false;
    }

    private boolean checkAxis(double x, double y, double r){
        if(x*r>0 && y*r>0){
            return checkTriangle(x, y, r);
        }else if(x*r<0 && y*r>0){
            return checkRectangle(x, y, r);
        }else if(x*r<0 && y*r<0){
            return checkCircle(x, y, r);
        }else return !(x * r > 0) || !(y * r < 0);
    }

    private boolean checkTriangle(double x, double y, double r){
        double area = areaOfTriangle(0, 0, 0, r, r, 0);
        double area1 = areaOfTriangle(0, 0, 0, r, x, y);
        double area2 = areaOfTriangle(0, r, r, 0, x, y);
        double area3 = areaOfTriangle(r, 0, 0, 0, x, y);
        return area == area1 + area2 + area3;
    }
    private boolean checkRectangle(double x, double y, double r){
        return x > (-r) && y < r;
    }
    private boolean checkCircle(double x, double y, double r){
        return Math.sqrt(x*x + y*y) <= r;
    }

    private double areaOfTriangle(double x1, double y1, double x2, double y2, double x3, double y3)
    {
        return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
    }
}
