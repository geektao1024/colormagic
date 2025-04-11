import { ObjectId, type Collection, type Filter, type OptionalUnlessRequiredId, type Sort } from 'mongodb';
import type { CreatablePaletteEntity, PaletteEntity } from '../entities/palette.entity';

export class PaletteRepository {
  constructor(private readonly collection: Collection<PaletteEntity>) {}

  public async setup(): Promise<void> {
    await this.collection.createIndexes([{
      key: { createdAt: -1 }
    }, {
      key: { tags: -1 }
    }, {
      key: { likesCount: -1 }
    }], { background: true });
  }

  public async list(page: number, size: number, filter: Filter<PaletteEntity>, sort: Sort): Promise<PaletteEntity[]> {
    return await this.collection.find(filter)
      .sort(sort)
      .skip(page * size)
      .limit(size)
      .toArray();
  }

  public async count(filter?: Filter<PaletteEntity>): Promise<number> {
    console.log(`[palette.repository] Count called with filter: ${JSON.stringify(filter || {})}`);
    
    try {
      // 检查集合是否已初始化
      if (!this.collection) {
        console.error('[palette.repository] MongoDB collection is undefined in count method');
        throw new Error('MongoDB collection not initialized');
      }
      
      // 检查countDocuments方法是否存在
      if (typeof this.collection.countDocuments !== 'function') {
        console.error('[palette.repository] collection.countDocuments is not a function');
        throw new Error('MongoDB collection missing countDocuments method');
      }
      
      const startTime = Date.now();
      const count = await this.collection.countDocuments(filter);
      const duration = Date.now() - startTime;
      
      console.log(`[palette.repository] Count result: ${count}, duration: ${duration}ms`);
      return count;
    } catch (error: any) {
      console.error('[palette.repository] Error in count method:', {
        message: error.message,
        stack: error.stack,
        name: error.name,
        code: error.code,
        timestamp: new Date().toISOString()
      });
      throw error;
    }
  }

  public async getById(id: string): Promise<PaletteEntity | null> {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }

  public async create(entity: CreatablePaletteEntity): Promise<PaletteEntity> {
    const { insertedId } = await this.collection.insertOne(entity as OptionalUnlessRequiredId<PaletteEntity>);

    return {
      _id: insertedId,
      ...entity
    };
  }

  public async updateLikesCount(id: string, value: number): Promise<void> {
    await this.collection.updateOne({ _id: new ObjectId(id) }, {
      $inc: {
        likesCount: value
      }
    });
  }
}
