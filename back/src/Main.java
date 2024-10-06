import java.io.IOException;


public class Main {
    public static void main(String[] args) throws IOException {
        long startTime = System.currentTimeMillis();
        FigureChecker figureChecker = new FigureChecker();
        RequestHandler requestHandler = new RequestHandler();
        ResponseHandler responseHandler = new ResponseHandler(requestHandler,figureChecker,startTime);
        responseHandler.sendResponse();
    }
}