# Specify  base image
FROM node:alpine

WORKDIR /usr/src/app

# Copy and package-lock.json to Docker environment
COPY package*.json ./


# Install dependencies
RUN npm install

# Copy  files
COPY ./ ./


# Uses port which is used by the actual application
EXPOSE 3000


# Default command
CMD ["npm", "start"]



# Build Image (t for tag)
# docker build -t myDockerId/imageName .
# docker build -t philliplangmartinez/realtors .


# Docker Run with Port Mapping
# docker run -it -p 3000:3000 <image id>


#push to docker
#docker push <image id/name>