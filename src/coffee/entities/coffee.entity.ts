import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity/flavor.entity";

@Entity()
export class Coffee{ //sql table === 'coffee'
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column( {nullable: true})
    description:string;

    @Column()
    brand: string;

    @Column({ default: 0})
    reccomendations: number;

   @JoinTable()
   @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees,
    {
        cascade: true, //[insert]
    }
   )
    flavors: Flavor[];
}