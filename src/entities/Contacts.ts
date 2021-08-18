import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Companies } from "./Companies";

@Entity('contacts')
class Contacts {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;
    @Column()
    name1: string;
    @Column()
    last_name1: string
    @Column()
    companiesId
    @ManyToOne(() => Companies, companies => companies.contacts, { eager: true })
    companies: Companies;
    @Column()
    last_name: string;
    // @ManyToOne(type =>Companies, contacts=>Contacts)
    // companies1:Companies;
    @CreateDateColumn()
    created_At: Date;
    @CreateDateColumn()
    updated_At: Date;



    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
export { Contacts }