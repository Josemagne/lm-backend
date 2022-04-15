import { Entity, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
class Group extends BaseEntity {
    @PrimaryColumn()
    group_id: string;

}

export default Group;