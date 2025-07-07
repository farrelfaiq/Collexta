FROM golang:1.21-alpine

# Set workdir
WORKDIR /app

# Install SQLite & timezone
RUN apk add --no-cache git sqlite tzdata

# Copy semua file project ke image
COPY . .

# Build PocketBase + custom hooks
RUN go build -o app .

# Expose port
EXPOSE 8090

# Jalankan app hasil build
CMD ["./app", "serve", "--http=0.0.0.0:8090"]
