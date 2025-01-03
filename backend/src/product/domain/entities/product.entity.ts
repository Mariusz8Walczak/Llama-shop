import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    category: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'text' })
    image_url: string;

    @Column({ type: 'varchar', length: 500 })
    short_description: string;

    @Column({ type: 'varchar', length: 50 })
    stock_status: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}