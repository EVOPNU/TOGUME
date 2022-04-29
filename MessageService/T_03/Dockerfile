FROM openjdk:17-oraclelinux8

ARG JAR_FILE

RUN microdnf install nc && microdnf clean all

RUN mkdir -p /apps
ADD ./target/T_03-0.0.1-SNAPSHOT.jar /apps/app.jar
COPY ./entrypoint.sh /apps/entrypoint.sh
COPY ./wait-for-service.sh /apps/wait-for-service.sh
RUN chmod +x /apps/entrypoint.sh
RUN chmod +x /apps/wait-for-service.sh

CMD ["/apps/entrypoint.sh"]