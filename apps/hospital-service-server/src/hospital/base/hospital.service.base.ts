/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Hospital as PrismaHospital,
  Service as PrismaService,
} from "@prisma/client";

export class HospitalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HospitalCountArgs, "select">): Promise<number> {
    return this.prisma.hospital.count(args);
  }

  async hospitals<T extends Prisma.HospitalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HospitalFindManyArgs>
  ): Promise<PrismaHospital[]> {
    return this.prisma.hospital.findMany<Prisma.HospitalFindManyArgs>(args);
  }
  async hospital<T extends Prisma.HospitalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HospitalFindUniqueArgs>
  ): Promise<PrismaHospital | null> {
    return this.prisma.hospital.findUnique(args);
  }
  async createHospital<T extends Prisma.HospitalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HospitalCreateArgs>
  ): Promise<PrismaHospital> {
    return this.prisma.hospital.create<T>(args);
  }
  async updateHospital<T extends Prisma.HospitalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HospitalUpdateArgs>
  ): Promise<PrismaHospital> {
    return this.prisma.hospital.update<T>(args);
  }
  async deleteHospital<T extends Prisma.HospitalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HospitalDeleteArgs>
  ): Promise<PrismaHospital> {
    return this.prisma.hospital.delete(args);
  }

  async findServices(
    parentId: string,
    args: Prisma.ServiceFindManyArgs
  ): Promise<PrismaService[]> {
    return this.prisma.hospital
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .services(args);
  }
}
