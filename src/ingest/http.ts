import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export interface HttpClient {
  getText(url: string): Promise<string>;
  getBinary(url: string): Promise<Uint8Array>;
}

export class FetchHttpClient implements HttpClient {
  constructor(private readonly userAgent = "oni-fans/0.1 (+https://github.com/github/copilot)") {}

  async getText(url: string): Promise<string> {
    const response = await fetch(url, {
      headers: {
        "user-agent": this.userAgent,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    return response.text();
  }

  async getBinary(url: string): Promise<Uint8Array> {
    const response = await fetch(url, {
      headers: {
        "user-agent": this.userAgent,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    return new Uint8Array(await response.arrayBuffer());
  }
}

export async function downloadFile(httpClient: HttpClient, url: string, destinationPath: string): Promise<string> {
  const bytes = await httpClient.getBinary(url);
  await mkdir(path.dirname(destinationPath), { recursive: true });
  await writeFile(destinationPath, bytes);
  return destinationPath;
}
