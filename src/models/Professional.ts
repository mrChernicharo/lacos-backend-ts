import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('profissionais')
class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  data_nasc: Date;

  @CreateDateColumn()
  data_cadastro: Date;

  @UpdateDateColumn()
  atualizado_em: Date;
}

export default Client;
