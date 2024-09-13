import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import static java.util.Objects.isNull;

public class FigureChecker {
    Logger logger = Logger.getLogger(this.getClass().getName());;

    public boolean checkSpot(double[] data){
        logger.setLevel(Level.INFO);

        return checkAxis(data[0], data[1], data[2]);
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
        return x >= (-r) && y <= r;
    }
    private boolean checkCircle(double x, double y, double r){
        return Math.sqrt(x*x + y*y) <= r;
    }

    private double areaOfTriangle(double x1, double y1, double x2, double y2, double x3, double y3)
    {
        return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
    }
}
