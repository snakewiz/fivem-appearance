export const PED_COMPONENTS_IDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const PED_PROPS_IDS = [0, 1, 2, 6, 7];

export const FACE_FEATURES: Array<keyof PedFaceFeatures> = [
  'noseWidth',
  'nosePeakHigh',
  'nosePeakSize',
  'noseBoneHigh',
  'nosePeakLowering',
  'noseBoneTwist',
  'eyeBrownHigh',
  'eyeBrownForward',
  'cheeksBoneHigh',
  'cheeksBoneWidth',
  'cheeksWidth',
  'eyesOpening',
  'lipsThickness',
  'jawBoneWidth',
  'jawBoneBackSize',
  'chinBoneLowering',
  'chinBoneLenght',
  'chinBoneSize',
  'chinHole',
  'neckThickness',
];

export const HEAD_OVERLAYS = [
  'blemishes',
  'beard',
  'eyebrows',
  'ageing',
  'makeUp',
  'blush',
  'complexion',
  'sunDamage',
  'lipstick',
  'moleAndFreckles',
  'chestHair',
  'bodyBlemishes',
];

// Thanks to rootcause for the eye colors names and hair decorations hashes.
export const EYE_COLORS: string[] = [
  'Green',
  'Emerald',
  'Light Blue',
  'Ocean Blue',
  'Light Brown',
  'Dark Brown',
  'Hazel',
  'Dark Gray',
  'Light Gray',
  'Pink',
  'Yellow',
  'Purple',
  'Blackout',
  'Shades of Gray',
  'Tequila Sunrise',
  'Atomic',
  'Warp',
  'ECola',
  'Space Ranger',
  'Ying Yang',
  'Bullseye',
  'Lizard',
  'Dragon',
  'Extra Terrestrial',
  'Goat',
  'Smiley',
  'Possessed',
  'Demon',
  'Infected',
  'Alien',
  'Undead',
  'Zombie',
];

export const HAIR_DECORATIONS: HairDecorations = {
  male: [
    { id: 0, collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    { id: 1, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_001' },
    { id: 2, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    { id: 3, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_003' },
    { id: 4, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_004' },
    { id: 5, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_005' },
    { id: 6, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_006' },
    { id: 7, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_007' },
    { id: 8, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_008' },
    { id: 9, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_009' },
    { id: 10, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_013' },
    { id: 11, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    { id: 12, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_011' },
    { id: 13, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_012' },
    { id: 14, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    { id: 15, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    { id: 16, collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_000' },
    { id: 17, collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_001' },
    { id: 18, collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_000' },
    { id: 19, collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_001' },
    { id: 20, collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_000' },
    { id: 21, collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_001' },
    { id: 22, collection: 'multiplayer_overlays', overlay: 'NGInd_M_Hair_000' },
    { id: 24, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_000' },
    { id: 25, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_001' },
    { id: 26, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_002' },
    { id: 27, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_003' },
    { id: 28, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_004' },
    { id: 29, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_005' },
    { id: 30, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_006' },
    { id: 31, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_M' },
    { id: 32, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_M' },
    { id: 33, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_M' },
    { id: 34, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_M' },
    { id: 35, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_M' },
    { id: 36, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_005_M' },
    { id: 72, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_M_000_M' },
    { id: 73, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_M_001_M' },
    { id: 74, collection: 'mpVinewood_overlays', overlay: 'MP_Vinewood_Hair_M_000_M' },
  ],
  female: [
    { id: 0, collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    { id: 1, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_001' },
    { id: 2, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_002' },
    { id: 3, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    { id: 4, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_004' },
    { id: 5, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_005' },
    { id: 6, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_006' },
    { id: 7, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    { id: 8, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_008' },
    { id: 9, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_009' },
    { id: 10, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_010' },
    { id: 11, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_011' },
    { id: 12, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_012' },
    { id: 13, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_013' },
    { id: 14, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    { id: 15, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    { id: 16, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_000' },
    { id: 17, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    { id: 18, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    { id: 19, collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_000' },
    { id: 20, collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_001' },
    { id: 21, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    { id: 22, collection: 'multiplayer_overlays', overlay: 'NGHip_F_Hair_000' },
    { id: 23, collection: 'multiplayer_overlays', overlay: 'NGInd_F_Hair_000' },
    { id: 25, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_000' },
    { id: 26, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_001' },
    { id: 27, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_002' },
    { id: 28, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    { id: 29, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    { id: 30, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_004' },
    { id: 31, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_006' },
    { id: 32, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_F' },
    { id: 33, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_F' },
    { id: 34, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_F' },
    { id: 35, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_F' },
    { id: 36, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    { id: 37, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_006_F' },
    { id: 38, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_F' },
    { id: 76, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_F_000_F' },
    { id: 77, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_F_001_F' },
    { id: 78, collection: 'mpVinewood_overlays', overlay: 'MP_Vinewood_Hair_F_000_F' },
  ],
};

export const DEFAULT_CUSTOMIZATION_CONFIG: CustomizationConfig = {
  ped: true,
  headBlend: true,
  faceFeatures: true,
  headOverlays: true,
  components: true,
  props: true,
  tattoos: true,
};

export const DATA_CLOTHES: DataClothes = {
  head: {
    animations: {
      on: {
        dict: 'mp_masks@standard_car@ds@',
        anim: 'put_on_mask',
        move: 51,
        duration: 600,
      },
      off: {
        dict: 'missheist_agency2ahelmet',
        anim: 'take_off_helmet_stand',
        move: 51,
        duration: 1200,
      },
    },
    props: {
      male: [[1, 0]],
      female: [[1, 0]],
      maleProps: [[0, -1]],
      femaleProps: [[0, -1]],
    },
  },
  glasses: {
    animations: {
      on: {
        dict: 'clothingspecs',
        anim: 'take_off',
        move: 51,
        duration: 800,
      },
      off: {
        dict: 'clothingspecs',
        anim: 'take_off',
        move: 51,
        duration: 1400,
      },
    },
    props: {
      maleProps: [[1, 0]],
      femaleProps: [[1, 0]],
    },
  },
  earaccs: {
    animations: {
      on: {
        dict: 'mp_cp_stolen_tut',
        anim: 'b_think',
        move: 51,
        duration: 900,
      },
      off: {
        dict: 'mp_cp_stolen_tut',
        anim: 'b_think',
        move: 51,
        duration: 900,
      },
    },
    props: {
      maleProps: [[2, -1]],
      femaleProps: [[2, -1]],
    },
  },
  chain: {
    animations: {
      on: {
        dict: 'clothingtie',
        anim: 'try_tie_negative_a',
        move: 51,
        duration: 2100,
      },
      off: {
        dict: 'clothingtie',
        anim: 'try_tie_negative_a',
        move: 51,
        duration: 2100,
      },
    },
    props: {
      male: [[7, 0]],
      female: [[7, 0]],
    },
  },
  body: {
    animations: {
      on: {
        dict: 'clothingtie',
        anim: 'try_tie_negative_a',
        move: 51,
        duration: 1200,
      },
      off: {
        dict: 'clothingtie',
        anim: 'try_tie_negative_a',
        move: 51,
        duration: 1200,
      },
    },
    props: {
      male: [
        [11, 252],
        [3, 15],
        [8, 15],
        [10, 0],
        [5, 0],
      ],
      female: [
        [11, 15],
        [8, 14],
        [3, 15],
        [10, 0],
        [5, 0],
      ],
    },
  },
  bottom: {
    animations: {
      on: {
        dict: 're@construction',
        anim: 'out_of_breath',
        move: 51,
        duration: 1300,
      },
      off: {
        dict: 're@construction',
        anim: 'out_of_breath',
        move: 51,
        duration: 1300,
      },
    },
    props: {
      male: [
        [4, 61],
        [6, 34],
      ],
      female: [
        [4, 15],
        [6, 35],
      ],
    },
  },
};
