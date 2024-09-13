FROM openjdk

RUN mkdir -p /opt/user/myapp

COPY lib/fastcgi-lib.jar /opt/user/myapp/lib/fastcgi-lib.jar
COPY src/ /opt/user/myapp/src/

WORKDIR /opt/user/myapp

RUN echo "Main-Class: Main" > MANIFEST.MF
RUN echo "Class-Path: ./lib/fastcgi-lib.jar" >> MANIFEST.MF
RUN javac -cp lib/fastcgi-lib.jar src/*.java
RUN jar -cvfm web.jar MANIFEST.MF -C src/ . -C lib fastcgi-lib.jar .

EXPOSE 2288

CMD ["java", "-DFCGI_PORT=2288", "-jar", "web.jar"]