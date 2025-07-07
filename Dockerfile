# Use a small and efficient base image
FROM alpine:latest

# Set working directory
WORKDIR /app

# Install optional dependencies (like SQLite and timezone support)
RUN apk add --no-cache sqlite tzdata

# Copy the PocketBase binary and data folders
COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations
COPY pb_hooks /pb_hooks

# Make sure the binary is executable
RUN chmod +x /app/pocketbase

# Expose the default PocketBase port
EXPOSE 8090

# Run PocketBase and poitn too hooksDir
CMD ["./app", "serve", "--http=0.0.0.0:8090"]
