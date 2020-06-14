import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Professional from './Professional';
import Client from './Client';

@Entity('consultas')
class Appointment {
  @PrimaryGeneratedColumn('increment')
  id_consulta: string;

  @Column()
  cliente_id: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Client;

  @Column()
  profissional_id: string;

  @ManyToOne(() => Professional)
  @JoinColumn({ name: 'profissional_id' })
  profissional: Professional;

  @CreateDateColumn()
  marcada_em: Date;

  @UpdateDateColumn()
  atualizada_em: Date;
}

export default Appointment;
