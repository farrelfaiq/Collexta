FROM golang:1.21-alpine as build

WORKDIR /app
COPY . .

RUN go build -o app .

FROM alpine:latest

WORKDIR /app
RUN apk add --no-cache sqlite tzdata

COPY --from=build /app/app /app/app
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations
COPY pb_hooks /app/pb_hooks

EXPOSE 8090

CMD ["./app", "serve", "--http=0.0.0.0:8090"]
