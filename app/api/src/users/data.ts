import { UserModel, PostNumber, Kyn } from "./user.dto";

export const users: UserModel[] = [
  {
    kennitala: '121212-2159',
    name: 'Jón Jónsson',
    address: {
      Address: 'Nóatún 17',
      PostNumber: PostNumber.Rvk105
    },
    kyn: Kyn.KK
  },
  {
    kennitala: '111111-2739',
    name: 'Ketrín Jónssdóttir',
    address: {
      Address: 'Ásvellir 1',
      PostNumber: PostNumber.Kop212
    },
    kyn: Kyn.HK
  },
  {
    kennitala: '101010-2519',
    name: 'Anna Önnudóttir',
    address: {
      Address: 'Ýsufell 45',
      PostNumber: PostNumber.Rvk111
    },
    kyn: Kyn.Kvk
  },

]