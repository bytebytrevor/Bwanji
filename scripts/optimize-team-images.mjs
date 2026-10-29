
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDirectory = "public";
const outputDirectory = "public/team";

const images = [
  ["Professional Photo Thoko.jpg", "thokozani-unyolo"],
  ["Lindarose.jpg", "lindarose-sikazwe"],
  ["Sapi Bachi.jpg", "sapi-bachi"],
  ["Anesu Profile Picture.jpg", "anesu-sakutukwa"],
  [
    "David Duri - Executive Creative Director.jpeg",
    "david-duri",
  ],
  [
    "Tanya Masendeke - Head of Strategy.jpeg",
    "tanyaradzwa-masendeke",
  ],
  ["Hilgard.jpg", "hilgard-kamuna"],
];

await fs.mkdir(outputDirectory, { recursive: true });

for (const [filename, outputName] of images) {
  const inputPath = path.join(inputDirectory, filename);
  const outputPath = path.join(
    outputDirectory,
    `${outputName}.webp`,
  );

  try {
    await sharp(inputPath)
      .rotate()
      .resize({
        width: 1200,
        height: 1500,
        fit: "inside",
        withoutEnlargement: true,
        kernel: sharp.kernel.lanczos3,
      })
      .webp({
        quality: 82,
        effort: 6,
      })
      .toFile(outputPath);

    console.log(`Optimized: ${outputName}`);
  } catch (error) {
    console.error(`Failed: ${filename}`, error.message);
  }
}
