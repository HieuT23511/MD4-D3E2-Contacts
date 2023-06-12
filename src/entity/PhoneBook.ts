import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";


//Thuộc tính danh bạ gồm có: Tên, địa chỉ, email, số điện thoại
@Entity()
export class PhoneBook {
    @PrimaryGeneratedColumn()
    public readonly id : number;
    @Column({type:"varchar"})
    public name : string;
    @Column({type:"varchar"})
    public address : string;
    @Column({type:"varchar"})
    public email : string
    @Column({type:"varchar"})
    public phone : string
}