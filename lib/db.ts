// Simple in-memory database for URL mappings
// In a production app, this would be replaced with a real database

interface UrlRecord {
  id: string;
  originalUrl: string;
  createdAt: Date;
  clicks: number;
}

class UrlDatabase {
  private urls: Map<string, UrlRecord> = new Map();

  generateId(length: number = 6): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  createShortUrl(originalUrl: string, customId?: string): UrlRecord {
    const id = customId || this.generateId();
    
    // Check if custom ID already exists
    if (customId && this.urls.has(customId)) {
      throw new Error('Custom ID already in use');
    }
    
    // Check if URL already exists with a different ID
    for (const [existingId, record] of this.urls.entries()) {
      if (record.originalUrl === originalUrl) {
        return record; // Return existing record if URL already shortened
      }
    }
    
    const record: UrlRecord = {
      id,
      originalUrl,
      createdAt: new Date(),
      clicks: 0,
    };
    
    this.urls.set(id, record);
    return record;
  }

  getOriginalUrl(id: string): UrlRecord | undefined {
    const record = this.urls.get(id);
    
    if (record) {
      // Increment click count
      record.clicks += 1;
      this.urls.set(id, record);
    }
    
    return record;
  }

  getRecentUrls(limit: number = 5): UrlRecord[] {
    return Array.from(this.urls.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}

// Export a singleton instance
export const urlDb = new UrlDatabase();