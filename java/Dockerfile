FROM maven:3.9.9-eclipse-temurin-21-jammy AS build
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN mvn -f /usr/src/app/pom.xml clean package -DskipTests

FROM eclipse-temurin:21.0.6_7-jdk-jammy
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/target/tls-0.0.1-SNAPSHOT.jar tls-0.0.1-SNAPSHOT.jar
COPY --from=build /usr/src/app/entrypoint.sh entrypoint.sh 

EXPOSE 8443

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]