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
        if(x*r>=0 && y*r>=0){
            return checkTriangle(x, y, r);
        }else if(x*r<=0 && y*r>=0){
            return checkRectangle(x, y, r);
        }else if(x*r<=0 && y*r<=0){
            return checkCircle(x, y, r);
        }else if(x*r>=0 && y*r<=0){
            return false;
        }else return x == 0 && y == 0;
    }

    private boolean checkTriangle(double x, double y, double r){
        boolean check = x<=r/2;
        return y >= 0 && y <= r && x >= 0 && x <= r / 2 && y <= -2 * x + r;
    }
    private boolean checkRectangle(double x, double y, double r){
        return x >= (-r) && y <= r;
    }
    private boolean checkCircle(double x, double y, double r){
        return Math.sqrt(x*x + y*y) <= 0.5*r;
    }
}
