# Gunakan Node.js versi terbaru LTS
FROM node:20

# Set working directory di container
WORKDIR /usr/src/app

# Copy file konfigurasi dulu (biar caching npm install efisien)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file project
COPY . .

# Jalankan aplikasi (default port Express biasanya 3000)
EXPOSE 3000
CMD ["npm", "run", "server"]
