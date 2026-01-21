import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All image URLs from your project
const images = [
    // Categories
    { name: 'antigo_testamento', url: 'https://i.postimg.cc/m2m7k2qT/Whats_App_Image_2026_01_21_at_11_12_44.jpg' },
    { name: 'novo_testamento', url: 'https://i.postimg.cc/dt5G3tXq/Whats_App_Image_2026_01_21_at_11_15_36.jpg' },
    { name: 'valores_virtudes', url: 'https://i.postimg.cc/fT8YyTFD/Whats_App_Image_2026_01_21_at_11_18_15.jpg' },
    { name: 'herois_fe', url: 'https://i.postimg.cc/3Jt2NJ6R/Whats_App_Image_2026_01_21_at_12_23_15.jpg' },
    { name: 'oracoes', url: 'https://i.postimg.cc/zXxTvXMh/Whats_App_Image_2026_01_21_at_12_31_44.jpg' },

    // Bonuses
    { name: 'bonus_plano_leitura', url: 'https://i.postimg.cc/2yyLBgVW/Chat_GPT_Image_Jan_21_2026_02_10_28_PM.png' },
    { name: 'bonus_licoes_jesus', url: 'https://i.postimg.cc/MHHfjgvy/Chat_GPT_Image_Jan_21_2026_02_12_49_PM.png' },
    { name: 'bonus_parabolas', url: 'https://i.postimg.cc/5yyQFD6X/Chat_GPT_Image_Jan_21_2026_02_12_54_PM.png' },
    { name: 'bonus_boas_maneiras', url: 'https://i.postimg.cc/Y00LmThQ/Chat_GPT_Image_Jan_21_2026_02_12_58_PM.png' },

    // Hero
    { name: 'hero_mockup', url: 'https://i.postimg.cc/0QWqkrDQ/Chat-GPT-Image-20-de-jan-de-2026-20-18-03.jpg' },

    // Isabele
    { name: 'isabele', url: 'https://i.postimg.cc/BvFgZzFs/mulher-de-tiro-medio-passando-bons-momentos-ao-ar-livre-23-2150757174.avif' }
];

const outputDir = path.join(__dirname, 'client', 'src', 'assets', 'webp_images');

// Create output directory
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        protocol.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                downloadImage(response.headers.location).then(resolve).catch(reject);
                return;
            }

            const chunks = [];
            response.on('data', (chunk) => chunks.push(chunk));
            response.on('end', () => resolve(Buffer.concat(chunks)));
            response.on('error', reject);
        }).on('error', reject);
    });
}

async function convertToWebP(imageBuffer, outputPath, quality = 80) {
    await sharp(imageBuffer)
        .webp({ quality })
        .toFile(outputPath);
}

async function processImages() {
    console.log('🚀 Starting image conversion to WebP...\n');

    for (const img of images) {
        try {
            console.log(`📥 Downloading: ${img.name}...`);
            const buffer = await downloadImage(img.url);

            const outputPath = path.join(outputDir, `${img.name}.webp`);
            console.log(`🔄 Converting to WebP...`);
            await convertToWebP(buffer, outputPath);

            const originalSize = buffer.length;
            const webpSize = fs.statSync(outputPath).size;
            const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

            console.log(`✅ ${img.name}.webp saved! (${savings}% smaller)\n`);
        } catch (error) {
            console.log(`❌ Error with ${img.name}: ${error.message}\n`);
        }
    }

    console.log('🎉 Done! WebP images saved to:', outputDir);
}

processImages();
