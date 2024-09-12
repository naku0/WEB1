public class Main {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        FigureChecker figureChecker = new FigureChecker();
        boolean flag = figureChecker.checkSpot();
        ResponseHandler responseHandler = new ResponseHandler(flag, startTime);
        responseHandler.sendResponse();
    }
}