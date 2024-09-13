import com.fastcgi.FCGIInterface;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ResponseHandler {

    Logger logger = Logger.getLogger(this.getClass().getName());

    private final RequestHandler requestHandler;
    private final FigureChecker figureChecker;
    long startTime;
    public ResponseHandler(RequestHandler requestHandler,FigureChecker figureChecker,long time) {
        this.requestHandler = requestHandler;
        this.figureChecker = figureChecker;
        this.startTime = time;
    }

    public void sendResponse() throws IOException {

        var fcgiInterface = new FCGIInterface();
        logger.info("Waiting for requests...");
        while (fcgiInterface.FCGIaccept() >= 0) {
            var data = requestHandler.handleRequest();
            var values = JSONParser.parse(data);
            if (values == null) {
                logger.log(Level.SEVERE, "Wrong JSON format");
                break;
            }
            logger.info("Request received! %s, %s, %s".formatted(values[0], values[1], values[2]));
            var status = figureChecker.checkSpot(values);
            var content = """
                    {
                    "status": %s,
                    "time": %s
                    }
                    """;
            logger.info("Status: %s, time: %s".formatted(status, (double) (System.currentTimeMillis() - startTime)/1000000));
            content = content.formatted(status, String.format( "%.4f",
                    (double) (System.currentTimeMillis() - startTime)/1000000));
            var httpResponse = """
                        HTTP/1.1 200 OK
                        Content-Type: application/json
                        Content-Length: %d
                        
                        %s
                        """.formatted(content.getBytes(StandardCharsets.UTF_8).length, content);

            logger.warning("status: %s".formatted(status));
            System.out.println(httpResponse);
        }
    }
}
