import { randomNumber } from "@/helpers/utils";
import * as peopleRepository from "@/repositories/people-repository";

export async function servicePerson() {
  const count = await peopleRepository.count();
  if (count === 0) {
    throw {
      type: "NotFoundError",
      message: "There is nobody to sort",
    };
  }
  const id = randomNumber(1, count);
  const result = await peopleRepository.findPersonById(id);

  return result;
}
