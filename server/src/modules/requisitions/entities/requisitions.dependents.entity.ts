import { Column, Entity } from 'typeorm';

@Entity('VETORH.USU_TDEPKIT')
export class RequisitionsDependents {
  @Column()
  USU_NUMEMP: number;

  @Column()
  USU_TIPCOL: number;

  @Column()
  USU_NUMCAD: number;

  @Column()
  USU_CODDEP: number;

  @Column()
  USU_DATALT: Date;

  @Column()
  USU_CODKIT: number;
}
