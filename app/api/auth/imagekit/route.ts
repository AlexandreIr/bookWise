import ImageKit from "imagekit";
import { NextResponse } from "next/server";
import config from "@/lib/config"; // ✅ Pegando do seu arquivo correto

// Pegando as variáveis corretamente
const { publicKey, privateKey, urlEndpoint } = config.env.imageKit;

const imagekit = new ImageKit({
  publicKey: publicKey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
});

export async function GET(req: Request) {
  console.log(publicKey ? publicKey : "no public key");

  return NextResponse.json(imagekit.getAuthenticationParameters());
}
