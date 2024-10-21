import com.fastcgi.FCGIInterface;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.Objects;
import java.util.logging.Logger;

public class RequestHandler {


    Logger logger = Logger.getLogger(this.getClass().getName());

    public String handleRequest() throws IOException, InvalidDataException {
        FCGIInterface.request.inStream.fill();
        var contentLength = FCGIInterface.request.inStream.available();
        var buffer = ByteBuffer.allocate(contentLength);
        var readBytes =
                FCGIInterface.request.inStream.read(buffer.array(), 0,
                        contentLength);
        var requestBodyRaw = new byte[readBytes];
        buffer.get(requestBodyRaw);
        buffer.clear();
        logger.info("Request: %s".formatted(FCGIInterface.request.params.getProperty("REQUEST_METHOD")));
        if (!(FCGIInterface.request.params.getProperty("REQUEST_METHOD").equals("POST"))) {
            logger.info("GET is forbidden!");
            throw new InvalidDataException("Wrong method");
        }
        return new String(requestBodyRaw, StandardCharsets.UTF_8);
    }

}

