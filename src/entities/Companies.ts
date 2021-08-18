import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Contacts } from "./Contacts";

@Entity('companies')
class Companies {
    @PrimaryColumn()
    readonly id: string;
    @Column()
    title: string;
    @OneToMany(()=>Contacts, contacts=>{ contacts.companies})
    contacts: Contacts[]
    @CreateDateColumn()
    created_At: Date;
    @CreateDateColumn()
    update_At: Date;

    

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Companies }
