import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DependentsView } from './entities/dependents.view';

@Injectable()
export class DependentsViewService {
  constructor(
    @InjectRepository(DependentsView)
    private readonly dependentsViewRepository: Repository<DependentsView>,
  ) {}

  async findDependents(numcpf: number) {
    const dependents = await this.dependentsViewRepository.find({
      CPF_TIT: numcpf,
    });
    return dependents;
  }
}
