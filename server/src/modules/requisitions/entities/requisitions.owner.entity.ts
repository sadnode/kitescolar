import { Column, Entity } from 'typeorm';

@Entity('VETORH.USU_THISKIT')
export class RequisitionsOwner {
  @Column()
  USU_NUMEMP: number;

  @Column()
  USU_TIPCOL: number;

  @Column()
  USU_NUMCAD: number;

  @Column()
  USU_DATALT: Date;

  @Column()
  USU_CODKIT: number;
}
