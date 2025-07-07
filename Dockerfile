# --- STAGE 1: Build binary with hooks ---
FROM golang:1.20 as builder

WORKDIR /app
COPY . .

# Build file `pb_hooks.go` menjadi binary bernama `pocketbase`
RUN go build -o pocketbase pb_hooks/pb_hooks.go

# --- STAGE 2: Deploy binary ---
FROM alpine:latest

WORKDIR /app
RUN apk add --no-cache sqlite tzdata

COPY --from=builder /app/pocketbase /app/pocketbase
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

RUN chmod +x /app/pocketbase

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
