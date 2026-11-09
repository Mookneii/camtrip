
import type { Destination } from '../types'

export const destinations: Destination[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'Angkor Wat',
    province: 'Siem Reap',
    description: 'Explore Cambodia’s famous ancient temple complex.',
    estimatedCost: 50,
    imageUrl:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Angkor_Wat.jpg/1280px-Angkor_Wat.jpg',
  },
  {
    id: 2,
    categoryId: 2,
    name: 'Kampot',
    province: 'Kampot',
    description: 'Enjoy beautiful mountain scenery and fresh air.',
    estimatedCost: 35,
    imageUrl: 'https://www.flexibletourism.com/userfiles/thumbs/Seahorse.jpg',
  },
  {
    id: 3,
    categoryId: 3,
    name: 'Kep Beach',
    province: 'Kep',
    description: 'Relax by the beach and enjoy fresh seafood.',
    estimatedCost: 30,
    imageUrl:
      'https://www.novo-monde.com/app/uploads/2023/07/kep-cambodia-2-1024x683.jpg',
  },
]
