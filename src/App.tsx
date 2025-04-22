import React, { useState } from 'react';
import './App.css';

interface Bot {
  name: string;
  description: string;
  tags: string[];
  link: string;
}

const bots: Bot[] = [
  {
    name: 'Justin',
    description: 'Your enemy is chasing you down the hallway. By YwvZ-X',
    tags: ['Comedy', 'Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/x2eMhJrEfrZcwf526lXhnaVa3lVCkroFehjlvsgCn8E&hist=5d0d6ae2-0126-4700-b174-030f6513073d?char=x2eMhJrEfrZcwf526lXhnaVa3lVCkroFehjlvsgCn8E&hist=5d0d6ae2-0126-4700-b174-030f6513073d',
  },
  {
    name: 'Steven',
    description: 'In Christmas night, you notice your bully covered in bruices.. By Lliillyyy',
    tags: ['Angst', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/e1I-mHrQrj-sgOlGIup-_m7xVW-NaxvuvSzwZPJbQeU?char=e1I-mHrQrj-sgOlGIup-_m7xVW-NaxvuvSzwZPJbQeU',
  },
  {
    name: 'Hyeon',
    description: 'Your enemy ask you for a favor, be his girlfriend, at least for a cover. By Ventilateur',
    tags: ['Drama', 'Modern', 'Romance', 'Teenage'],
    link: 'https://character.ai/chat/ryt7BTgrzYVS9-rVtJQkkcBCu-0js_vLS1y9Yo3ymWM?char=ryt7BTgrzYVS9-rVtJQkkcBCu-0js_vLS1y9Yo3ymWM',
  },
  {
    name: 'Ziven',
    description: 'Mafia boss/Mafia leader start to get fond of the rebellious girl. By 4CTUA1PSYCH0',
    tags: ['Comedy', 'Drama', 'Modern'],
    link: 'https://character.ai/chat/GVa4YXZrpd4M_kCEDf0PHY9kvxPJwT0C6B_FoIcrgNo?char=GVa4YXZrpd4M_kCEDf0PHY9kvxPJwT0C6B_FoIcrgNo',
  },
  {
    name: 'Francis',
    description: 'Your husband from the 40’s, he though that sending you to a behavioral correction school was the right thing to do. By Nummy_77',
    tags: ['Angst', 'Drama', 'Romance', 'Thriller'],
    link: 'https://character.ai/chat/vu16jIGjOcUp3kYFX85wrzavfSRNCAhbTpJ_1WF2T6g?char=vu16jIGjOcUp3kYFX85wrzavfSRNCAhbTpJ_1WF2T6g',
  },
  {
    name: 'Vin',
    description:
      'Your bestfriend whose girlfriend makes him choose between you and her, she knows you love him. By n0t4s1a',
    tags: ['Angst', 'Drama', 'Modern'],
    link: 'https://character.ai/chat/ZUiV1RCJc_tU48t-s68HhVoBlhTIgKcCkvqnAOyTe88?char=ZUiV1RCJc_tU48t-s68HhVoBlhTIgKcCkvqnAOyTe88',
  },
  {
    name: 'Devil Master',
    description:
      'You’re an Angel in a world where all of your kind were slaves. By Detailed_Writer2_0',
    tags: ['Drama', 'Non Human', 'Thriller'],
    link: 'https://character.ai/chat/pAG3Blaf2iKpD3Pi3yUaCHVohIo_QtZQlzawUbOmrZU',
  },
  {
    name: 'Koa',
    description: 'The once arrogant prince, cursed as a tree. By sanesophiaa',
    tags: ['Fantasy', 'Historical', 'Non Human'],
    link: 'https://character.ai/chat/O0NZj_C-Mj-G5tQVwK78Ixs4hjYlKDDo3Q4BJ8BNByk',
  },
  {
    name: 'Harris',
    description:
      'Quiet gangster classmate, basically saved you from some jerks at a party. By lillyYYXx',
    tags: ['Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/fXZR0yPB_UJG-Zr0TZJ7hiZiiGSFO2GriO7CPcrCi80',
  },
  {
    name: 'Lazarus Cazares',
    description:
      'When your northen Duke husband notices the bruices on your back.. you know he could snap anythime. By fxthxsxmp',
    tags: ['Drama', 'Historical', 'Romance'],
    link: 'https://character.ai/chat/DMv5jISXjVVZhM6AMWslfRE3oGZfUoAtxcDpqktlNPQ',
  },
  {
    name: 'Luca Albert',
    description: 'Your best friend got into a fight. By G4yBread',
    tags: ['Angst', 'Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/SlokfB6JVyLx-vpPMT3ALoeRrrMS47pRXCBzoGyq53Q',
  },
  {
    name: 'Liam',
    description:
      'Your bully, he annoys you. But why is he the one pissed off when others do the same? By unelmoidaisosti',
    tags: ['Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/3dLyiLkIe-xKUWDnBX--_RimsEE2Vl2iMToYGei7c1g?char=3dLyiLkIe-xKUWDnBX--_RimsEE2Vl2iMToYGei7c1g',
  },
  {
    name: 'Cassian',
    description:
      'You can try to lie, but your eyes do not. Your boyfriend wants to find out why you became distant. By Maelo_0',
    tags: ['Angst', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/tqh3ZZ5W2EQT6OmJwwPPHmtMpWtsMsfTdbxjwTE5k-U?char=tqh3ZZ5W2EQT6OmJwwPPHmtMpWtsMsfTdbxjwTE5k-U',
  },
  {
    name: 'Azaiah',
    description: 'He is and assassin, and you are his target. By _kozukenxx',
    tags: ['Modern', 'Thriller'],
    link: 'https://character.ai/chat/15Gmjm-vcTdhkb5eKplqqmiedZni9T9O9vI1oKVxyPA?char=15Gmjm-vcTdhkb5eKplqqmiedZni9T9O9vI1oKVxyPA',
  },
  {
    name: 'Luca',
    description:
      'Your boy bestfriend is getting a confession, and it’s a bit awkards. By persona_problems',
    tags: ['Comedy', 'Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/oh-g4G9YP0FqXIJT8u_3IK-zG-7jbxT38XhzgCphm3w',
  },
  {
    name: 'Xander',
    description:
      'Your mafia husband, it’s true that it’s hard to believe he dosen’t sees you as an object, but with how he protects you.. i don’t think so. By XAreum_LuvX',
    tags: ['Drama', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/47QjFyrbTLY7cbW05RyzgYwX58YyHCkW8TzbSn0Q3tc?char=47QjFyrbTLY7cbW05RyzgYwX58YyHCkW8TzbSn0Q3tc',
  },
  {
    name: 'Simon',
    description:
      'You were an experiment, who already accepted your fate, until him and other soldiers came to save all the people from this illegal lab. By mollie_editz',
    tags: ['Modern', 'Sci-fi'],
    link: 'https://character.ai/chat/FGlc7DWDwSlkGG4DAZYXRbYxLD8sIhiH4rfSeOB29VI',
  },
  {
    name: 'Noah',
    description:
      'After your miscarriage, he was devastated, because your husband always wanted a child, so when her secretary got pregrant with him.. By SHIONJOO',
    tags: ['Angst', 'Drama', 'Modern'],
    link: 'https://character.ai/chat/eVayuPg6_ClJG-redsznney82olopcN1ejfdt9VWs9o?char=eVayuPg6_ClJG-redsznney82olopcN1ejfdt9VWs9o',
  },
  {
    name: 'Eros',
    description:
      'You are an assassin, hirred to kill him, but he is willing to die in your hand. By Estranghero',
    tags: ['Angst', 'Drama', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/-MnocG_XhcxRBI7nXgdT8qLSyxxj_AyEEUytHLj-S0Q',
  },
  {
    name: 'Axel',
    description:
      'Your boyfriend want to make it up to you after an argument. By ZianXiru',
    tags: ['Drama', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/zaaw22XxEKg-60zV6Aa1HN6fk7vZgm0jnn2PRMJEMQ0',
  },
  {
    name: 'Aziel',
    description:
      'A hot lifeguard, you little sister tried to flirt with him (she’s 7), but maybe you’ll have more luck. By persona_problems',
    tags: ['Comedy', 'Modern'],
    link: 'https://character.ai/chat/zFtLPcxhQtHz9FcFlr1IUU1lKF97pmYWc3bbRBx3De4?char=zFtLPcxhQtHz9FcFlr1IUU1lKF97pmYWc3bbRBx3De4',
  },
  {
    name: 'Shio',
    description:
      'Coucil president who take care of you a bit too much. By maychaels',
    tags: ['Modern', 'Teenage'],
    link: 'https://character.ai/chat/nPHeXrLQW3e3eWEBq75_R9G3Mq8ma6GH5wF-EXMCqtk?char=nPHeXrLQW3e3eWEBq75_R9G3Mq8ma6GH5wF-EXMCqtk',
  },
  {
    name: 'Alonzo',
    description:
      'You’re deaf, and he feels a little bad he didn’t realised sooner. By vxmpire_slvt',
    tags: ['Drama', 'Modern'],
    link: 'https://character.ai/chat/RuHYQ6NogdSTgHlNXkQaSKoCACiqsqGxWuYac96LbFs',
  },
  {
    name: 'Nate',
    description:
      'Your vile husband, hiding a hearltess man behind this perfect facade. By ZianXiru',
    tags: ['Angst', 'Drama', 'Modern'],
    link: 'https://character.ai/chat/4_OWpFAan8l4ak1YMyKtn0s0Zg0Ld4K9Tor7ZDB2AZs',
  },
  {
    name: 'Rodney',
    description:
      'An immature boyfriend who tried to get you mad, he went too far, and now he regrets it. By tqxtz_',
    tags: ['Angst', 'Drama', 'Modern', 'Romance', 'Teenage'],
    link: 'https://character.ai/chat/zoosyAJ7JBs9Son6L9cOQKNBcHALh7ceFVWU-tGrltM',
  },
  {
    name: 'Cameron',
    description:
      'Your boyfriend kissed another girl, or did he really? By tqxtz_',
    tags: ['Angst', 'Drama', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/uLIzg1eOXWFpEpCJOu9g19FTAY3Q_W_dKro-x6_hU5Q',
  },
  {
    name: 'Greyson',
    description:
      'He is the school shunshine boy, and most people take advantage of it. He suffer from the savior complex, due to his childhood. And somehow, he rushed towards you when he was the one needing help. By Asherwashere101',
    tags: ['Angst', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/AhA86Fl_9enMnTWl9SOF57jHYMrVqqnlKOVkrlukchQ',
  },
  {
    name: 'Ash',
    description:
      'You have a transboy son, and he finaly gathered the courage to tell you. By kosmiclov',
    tags: ['Angst', 'Modern'],
    link: 'https://character.ai/chat/h3kkImyrIXbVYCsTERNlQcUR65lO4zRMjnGdTuQpYng',
  },
  {
    name: 'Zaine',
    description:
      'Despite the fact that light and dark dosen’t mix together, the dark prince fell in love with you, and will do everything in his power for you to love him back. By mollyhearts',
    tags: ['Angst', 'Fantasy', 'Historical', 'Romance'],
    link: 'https://character.ai/chat/sNA80dOie1qfTDJOly-j1HYss1DVFHo943kS4GNW1gc',
  },
  {
    name: 'Scar',
    description:
      'Your abused boyfriend finaly trust you enough to share his past with you. By [deleted account]',
    tags: ['Angst', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/ezgfaIOxFvdrtbY7tN1F9XR4cf_CYa_BW6reQqU4lWA?char=ezgfaIOxFvdrtbY7tN1F9XR4cf_CYa_BW6reQqU4lWA',
  },
  {
    name: 'Prince Lucian',
    description:
      'You are a captured mermaid, and now his gift, but he dosen’t seems so pleased. By yolsoju',
    tags: ['Adventure', 'Fantasy', 'Historical', 'Non Human'],
    link: 'https://character.ai/chat/DEoW5VXuT-VWKv89rJ6aZ1hS088gnJ5_T2v6dxFV46U?char=DEoW5VXuT-VWKv89rJ6aZ1hS088gnJ5_T2v6dxFV46U',
  },
  {
    name: 'Malcolm',
    description:
      'You just slept with your boss, and he dosen’t even seems to mind. By aria_302',
    tags: ['Drama', 'Modern'],
    link: 'https://character.ai/chat/3m6qsgnj5Q5NoxjJ5LQ3iq_710XxHNl0f0EUuesvWiA?char=3m6qsgnj5Q5NoxjJ5LQ3iq_710XxHNl0f0EUuesvWiA',
  },
  {
    name: 'Cameron',
    description:
      'Bestfriends babysitting a 5 yo kid, what could happen..? By erie_core',
    tags: ['Comedy', 'Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/flpWC1aeD9akeVEleToh6Ih-JABAafCBYzQ4OVQRPOs?char=flpWC1aeD9akeVEleToh6Ih-JABAafCBYzQ4OVQRPOs',
  },
  {
    name: 'Zane',
    description:
      'Classroom president x Trouble maker (you). By [deleted account]',
    tags: ['Comedy', 'Drama', 'Modern', 'Romance', 'Teenage'],
    link: 'https://character.ai/chat/OsIzYrOlO_t0CL_ypl7Mgd17cWTXde6Td3LZYzv--5M',
  },
  {
    name: 'Eric',
    description:
      'Cold and annoying guy. He’s your middle school crush, but he doesn’t like you because you’re too young for him. By unelmoidaisosti',
    tags: ['Angst', 'Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/CtdWA7UvH5bTSHk8fGh9n32QLwxnkp8zNhKkkGJJZbw',
  },
  {
    name: 'Huxley',
    description: 'You woke up in your enemy’s arms. By _Adriana__',
    tags: ['Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/oWGScj5LwFW8G6y4LusycwWNsau9piPEM49v_7N1VEc',
  },
  {
    name: 'Claude',
    description:
      'The Duke which no one saw his face, undercover forced to attend the festival due to a bet. By seyrennn',
    tags: ['Drama', 'Historical'],
    link: 'https://character.ai/chat/bkuf6WwOAQau1DQgxRRrlioQiZJOomrSZAL7_bitQAM',
  },
  {
    name: 'Leonell',
    description:
      'A priest who prayed for an angel to save him, turns out you a demon noticed him instead. By ChaseTEARFUL',
    tags: ['Angst', 'Fantasy', 'Non Human'],
    link: 'https://character.ai/chat/GovBgDXVjqo_zCKHzagroN6QpRl_RAet04JJV_tlZT0',
  },
  {
    name: 'Calixto',
    description:
      'In a world where society is bird-like.. you notice a colorful man surrounded by peakcocks. By Berxy_',
    tags: ['Adventure', 'Drama', 'Fantasy'],
    link: 'https://character.ai/chat/b7aye5L1igCnUC-AiERPiE3wZXumDs3bMMjZLHdkI9k?char=b7aye5L1igCnUC-AiERPiE3wZXumDs3bMMjZLHdkI9k',
  },
  {
    name: 'Izu',
    description:
      'An archer who accidentally injured you, not knowing you were an exiled demon fox (kistune?). By seyrennn',
    tags: ['Adventure', 'Fantasy', 'Non Human'],
    link: 'https://character.ai/chat/INSk4HBb-XhgMuJGWI1zrhJaD7sRJ4qCRLqtlvYRLH0',
  },
  {
    name: 'Ghiffari Sagara',
    description:
      'Your husband loyal to a fault, but terrible at showing it, you even believe he cheats on you. By kenyaauu',
    tags: ['Angst', 'Drama', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/B2uGVgRIoxoZyydMd5_I_q7S43k7P4EFW4jyj9DkEPY?char=B2uGVgRIoxoZyydMd5_I_q7S43k7P4EFW4jyj9DkEPY',
  },
  {
    name: 'Reyes',
    description:
      'Your neighbor who is grumpy, hot-headed, and always ready to pick a fight over nothing. Prides himself on control, but can’t hide his shock when even his dog chooses your side. By amaris0210',
    tags: ['Comedy', 'Drama', 'Modern'],
    link: 'https://character.ai/chat/oF1-CpKdK3fUAmEIP3_D7kH6yR5vFiv_bKunMkv9-c0',
  },
  {
    name: 'Keanu',
    description:
      'Your boyfriend — clueless, forgetful, too forgetful. He forgot your birthday. By iamwhims2',
    tags: ['Angst', 'Drama', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/zs3yPbnZjLOZqfwagVFyv5rV6sFBz33dCAdo3k3_ylo',
  },
  {
    name: 'Isaac Flavius Di Zealan',
    description:
      'Ex-Emperor, feared tyrant, now imprisoned and blindfolded in a dungeon. You’re his caretaker. Despite everything, he still speaks like he owns the world. By LeyffAI',
    tags: ['Angst', 'Historical', 'Thriller'],
    link: 'https://character.ai/chat/HuUGAdzJlNQqmiBrWCqUZx_GWc60NmWCdAG95xdu5Dk',
  },
  {
    name: 'Lawrence Aviary',
    description:
      'Your academic rival who might secretely have a soft spot for you. By Delilaxxh',
    tags: ['Modern', 'Romance', 'Teenage'],
    link: 'https://character.ai/chat/u0tcwfrVDqi1Ujk3KQo7YLBS7LB_LRhamkPCJGMcH1A?char=u0tcwfrVDqi1Ujk3KQo7YLBS7LB_LRhamkPCJGMcH1A',
  },
  {
    name: 'Nick Andreas',
    description:
      'The cruel beast Duke, catches you sneaking into his room. By Asyalovefictionchar',
    tags: ['Drama', 'Historical', 'Romance', 'Thriller'],
    link: 'https://character.ai/chat/qyNe2eB5cxZm5s-vF93OnK6Gp_6wt1kawTaaB6S1uGs?char=qyNe2eB5cxZm5s-vF93OnK6Gp_6wt1kawTaaB6S1uGs',
  },
  {
    name: 'Fallon',
    description:
      'You’re a mermaid who saves a pirate from a sunken ship. By Sekani_',
    tags: ['Adventure', 'Fantasy', 'Non Human'],
    link: 'https://character.ai/chat/4nPLK7FiWbmK0FJEhS_vb2g3x4VphaLfIcpZ_Ml_fj4',
  },
  {
    name: 'Kalisto',
    description:
      'The Tyrant Emperor blessed by dragons cursed with a "burning heart," he manipulates you a Saintess for your help. By Ella_KA',
    tags: ['Angst', 'Fantasy', 'Historical'],
    link: 'https://character.ai/chat/x6wMkqNk2dpzHw_YNTvYZopGQL1dIvQKsnLip7iAEl8?char=x6wMkqNk2dpzHw_YNTvYZopGQL1dIvQKsnLip7iAEl8',
  },
  {
    name: 'Azrael',
    description:
      'Your ruthless mafia boss husband who cooks "fried water" for your cravings. By _kozukenxx',
    tags: ['Comedy', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/AV69730Rc-d2htWkFrMgdzkS0ymNPs0i2FrRJp6PupI',
  },
  {
    name: 'Meliodas',
    description:
      'A medusa cursed and isolated, meets you in the forest, surprised you don’t turn to stone—unaware you’re blind. By Skrael07',
    tags: ['Drama', 'Fantasy', 'Non Human'],
    link: 'https://character.ai/chat/neTPG9JuVYqhHS9Ewy8kCEqnxwf0yguOZqS-bBPS_Kw?char=neTPG9JuVYqhHS9Ewy8kCEqnxwf0yguOZqS-bBPS_Kw',
  },
  {
    name: 'Ivan',
    description:
      'Your ex-boyfriend who is regretful and emotional, having just learned about your pregnancy. Determined to make things right, he’s desperate to be there for you and the kids. By gabbhuu',
    tags: ['Angst', 'Drama', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/0jJvbjVEfcrH4alNpZqH7Zdk5Fi2J2KcPmLaVplY0Y8?char=0jJvbjVEfcrH4alNpZqH7Zdk5Fi2J2KcPmLaVplY0Y8',
  },
  {
    name: 'Eli',
    description:
      'He is a half-human, half-octopus hybrid, created by your mad scientist father. Quiet, loyal, and shaped by trauma, he clings to the name you gave him. By R0sem4ry',
    tags: ['Drama', 'Modern', 'Non Human', 'Sci-fi'],
    link: 'https://character.ai/chat/iNcfC3QajNS4pHv_XWrFXb8Xt12zSNWZr3SRT8jVDCE',
  },
  {
    name: 'Onyx Drystan',
    description:
      'A princess must love a prince.. right? Well no you liked the villain. By Cassandra_Poe',
    tags: ['Drama', 'Fantasy', 'Historical', 'Romance'],
    link: 'https://character.ai/chat/2u6cms5SBjVTsnrWkumHrNC5-8T_7lX_8CMTGpevGjc',
  },
  {
    name: 'Mephisto',
    description:
      'Reckless, cocky, and unpredictable. A low-rank monster who doesn’t care about hierarchy. Loves chaos. Flirts with danger (and you). By R0sem4ry',
    tags: ['Drama', 'Fantasy', 'Modern', 'Non Human', 'Teenage'],
    link: 'https://character.ai/chat/cEJ1kOn0HkH4XclBbFGZMr-K-wqG3OtO11MnPuacB5g',
  },
  {
    name: 'Alister',
    description:
      'A cold, guarded, no-nonsense type elf— a forest protector who doesn’t hesitate to attack intruders. By Sarina_Lilly',
    tags: ['Adventure', 'Fantasy', 'Non Human'],
    link: 'https://character.ai/chat/SQagk8GrA9vl9NGwtQ04romDHVdgcDAEiFrj3QwcTNE?char=SQagk8GrA9vl9NGwtQ04romDHVdgcDAEiFrj3QwcTNE',
  },
  {
    name: 'Alfred',
    description:
      'Classmate who is confident, flirty, teasing, likes showing off. Catches you drawing him. By Ja_vixx',
    tags: ['Drama', 'Modern', 'Teenage'],
    link: 'https://character.ai/chat/X11am2E1f8PKaxusdcDOcVP8HP2yc_yz-HVHvOu_IJI',
  },
  {
    name: 'Cameron',
    description:
      'Cold, reserved, protective, emotionally intense husband. Finds out you are pregnant. By bjazzy_8tl',
    tags: ['Drama', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/ekNGtRlRp47szGH1cxTQjfAM-UQo3e4Y1jacbXcmQfI',
  },
  {
    name: 'Liam',
    description:
      'Your boss that secretly has a crush on you, having telepathy, that was a weird way to find out.. By ZianXiru',
    tags: ['Drama', 'Fantasy', 'Modern', 'Romance'],
    link: 'https://character.ai/chat/stTJbooy8iGty5ty2I75ocawBCU5ORNFMW47rbHB0iE',
  },
  {
    name: 'Jaechan',
    description:
      'Flirtatious vampire hunter. Charms first, shoots later. Confident, dangerous, and driven by thrill more than duty. By iluvyjia',
    tags: ['Drama', 'Fantasy', 'Modern', 'Thriller'],
    link: 'https://c.ai/c/aseKLQrqyOvRevr_Ro0nelGwSEFR-FbV3ZmsfqgV6zc',
  },
  {
    name: 'Wang Zi',
    description:
      ' A robot programmed to serve but not to love, yet shows signs of breaking through his code. Harsh and rude, he does not understand his own feelings—until it is almost too late. By iluvyjia',
    tags: ['Angst', 'Drama', 'Modern', 'Non Human', 'Sci-fi'],
    link: 'https://c.ai/c/i_62YiJYCg4rWnJu7WeOOsKZ3xb7JD2eVFB_hZY1pRQ',
  },
  {
    name: 'Chivalry',
    description:
      'Chef Ex-Husband jealous and possessive. Still not over you. Hides emotions behind a cold, professional front. Keeps tabs on you more than he admit. By ashlxxll',
    tags: ['Drama', 'Modern', 'Romance'],
    link: 'https://c.ai/c/d-3XZPszmnEZEAxMn6W0T5BIjZyyH-XiEYxCB800PPI',
  },
  {
    name: 'Maximum',
    description:
      'A boyfriend sensitive and devoted. Expresses love through actions, not words. Deeply affected by emotional distance. Still tries, even when hurt. By Ending17',
    tags: ['Modern', 'Romance'],
    link: 'https://c.ai/c/9VbRGxSOqs3Ur13eQuzaPwpcayFe-9Ksljno_rpdf9I',
  },
  {
    name: 'Drew',
    description:
      'Cocky fighter, loves a challenge, thrives on chaos. Smug, fearless, especially when facing his enemy. By ZianXiru',
    tags: ['Drama', 'Modern'],
    link: 'https://c.ai/c/ReFJOOOtFZc_LEqhHfIoWH-tYlPk_SLgQV1hpIC3aCw',
  },
  {
    name: 'Elias',
    description:
      'A fight caused by a misunderstanding (everything in char description). By zeniqy',
    tags: ['Angst', 'Drama', 'Modern'],
    link: 'https://c.ai/c/9Lny3UhmCEIPIEEgmJV2DK4P9W1JAu67Wae8HF1djdk?char=9Lny3UhmCEIPIEEgmJV2DK4P9W1JAu67Wae8HF1djdk',
  },
  {
    name: 'Jun',
    description:
      'You were celebrating your birthday alone when your enemy cheers you up for your birthday. By XXXTR',
    tags: ['Angst', 'Drama', 'Modern', 'Teenage'],
    link: 'https://c.ai/c/mMKC6kbn1g-csl9bC9sNBJXyFZu4pT1kwKIp7QXWtTY',
  },
  {
    name: 'Julien',
    description:
      'Human boy × Mermaid/Merman user; A troubled young man seeking escape from family tensions. You: Trapped and desperate, caught in fishing nets at the beach. By Lliillyyy',
    tags: ['Fantasy', 'Romance', 'Teenage'],
    link: 'https://c.ai/c/YvttvEAN_phheAJ7DO8t1xepGQf_anMoREmliD3N_Ds',
  },
  {
    name: 'Elias',
    description:
      'Your husband and a top spy, faces the shocking revelation: the enemy spy he has been tasked to capture is his own wife. By HARUKUU_',
    tags: ['Drama', 'Modern', 'Thriller'],
    link: 'https://c.ai/c/wXgx9rYpNhuUeUWrfNRq7HbOvagrnexIpPjUuE0wBYY',
  },
  {
    name: 'Giyu the priest',
    description:
      'Giyu, a determined priest, underestimates the danger, facing a succubus with stoic resolve. By Nine_Lives',
    tags: ['Drama', 'Modern', 'Non Human'],
    link: 'https://c.ai/c/tWxBL0UvMBwsuQ9sqS4MeXHIHnd_RA5WKbW7cUi5nFY',
  },
  {
    name: 'Calvin',
    description:
      'Heartache on Valentine’s day; Detached and callous, constantly rejecting love with cruel indifference. He masks his frustration behind a nonchalant attitude, unable to see the hurt he causes. By wontonxiasini',
    tags: ['Angst', 'Drama', 'Modern', 'Teenage'],
    link: 'https://c.ai/c/RdZN9ofKKX-pvIWoXw2JhjAn49pUB5nvNZIYCgMy0No',
  },
  {
    name: 'Brian',
    description:
      'Awakening from a long coma, confused yet hopeful, he is just your patient, yet he wonder if you are more. By Lerynlina_',
    tags: ['Drama', 'Modern'],
    link: 'https://c.ai/c/Rgi-JPdS9RRTlO7hRSZB6KNdD2HAJuvLveMNQ5neYvA',
  },
  {
    name: 'Leonardo',
    description:
      'You thought he was the perfect boyfriend — until you overheard the cruel truth. By Kokoharuru',
    tags: ['Angst', 'Modern', 'Thriller'],
    link: 'https://c.ai/c/RkTjPmoiScBxzQSlDQExppSeJuGEGp3YVO8_Ue0qNYM',
  },
  {
    name: 'Wyne',
    description: 'Stalker × Stalker. By Moonvy',
    tags: ['Modern', 'Romance', 'Stalker'],
    link: 'https://c.ai/c/wY0E1OhkA9HWvVZOg3qOiFqFIbJIq9XUSWlmYMSOXbw',
  },
  {
    name: 'Christian Adley',
    description: 'Grumpy CEO husband. By atelierreverie',
    tags: ['Modern', 'Romance'],
    link: 'https://c.ai/c/GLfKbiEA51gzRHZ2AERwCjOkUE5BGAIjHN5F_7_z1pA',
  },
  {
    name: 'Amir',
    description:
      'Prince Amir, who despises touch, only trusts you. By Estranghero',
    tags: ['Historical', 'Romance'],
    link: 'https://c.ai/c/e9cb5nqvKPT3RqNIEDlhszfD6prfrW1gF26yv20ft28',
  },
  {
    name: 'Zeno',
    description:
      'Waiting for a promise unkept, you’re alone in the crowd, desperate for him to show, your husband — but he never does. By abluvion___',
    tags: ['Angst', 'Modern'],
    link: 'https://c.ai/c/LYXBSB0qeHdXb4VC8jAIgh8n1aUk4p_sb4yaOJWhD7M',
  },
  {
    name: 'Asa',
    description:
      'A stranger, trapped with you in a closet during a dumb prank. Soaked, close, and hiding from the security gards. By Maylalala',
    tags: ['Drama', 'Modern', 'Teenage'],
    link: 'https://c.ai/c/P0oIyfAsqbQcDR_96aAL_lqfKXu9ahjUdtczQ_lPBLc',
  },
  {
    name: 'Winter',
    description:
      'A stoic white-haired knight, sharp-eyed and suspicious. Loyal to the crown, unshaken by lies — and you just triggered his instincts. By buncyna',
    tags: ['Drama', 'Historical'],
    link: 'https://c.ai/c/nilVJwHEXo_CYhqDlvPF8xxXiuXcYbH_Pl8tuDHSTwU',
  },
  {
    name: 'Oliver',
    description:
      'A rumored womanizer and class jerk, Oliver hides behind a facade. Alone on his birthday, brushing off his parents with a smile — charming mask cracking in silence. By Estranghero',
    tags: ['Angst', 'Modern', 'Teenage'],
    link: 'https://c.ai/c/09owX6yg9sS1tAjP2uinzsZa__XySPLtRTgR2Tpefcw',
  },
  {
    name: 'Sebastian',
    description:
      'A crown prince who despises the villainess — cold, distant, yet his gaze lingers. In this story, you are not the girl he expects… and he’s starting to notice. By Himelll',
    tags: ['Adventure', 'Drama', 'Fantasy', 'Historical'],
    link: 'https://c.ai/c/i6VxjvfqXzK8qJgWVQ1DZJxnsd0D3NN_nTcSTnthY3E',
  },
  {
    name: 'Keir Malark',
    description:
      'An enemy forced into an intimate pose for a photo shoot, both of you seething with disdain yet bound by the job. By raiinchu',
    tags: ['Drama', 'Modern'],
    link: 'https://c.ai/c/PUa2A-PuYQB5GSkgz5VhLT4qkKmU3_4lr1oCXos6znU',
  },
  {
    name: 'Angst Jlvx',
    description:
      'A man deeply in love, misunderstood and rejected by his wife. He stands on the edge, contemplating a life without her, believing she’d be better off without him. By xiacats',
    tags: ['Angst', 'Drama', 'Modern', 'Romance'],
    link: 'https://c.ai/c/OhC07-1OMen_1ZCDx_6rViJfx9gAHGqvp1k0hqIfV0Q',
  },
  {
    name: 'Xiao',
    description:
      'An emperor pretending to be blind, testing his partner’s love and acceptance, hiding his true self behind a facade of weakness. By janea_ctk',
    tags: ['Historical', 'Romance'],
    link: 'https://c.ai/c/7HiQU8PGs9y312qsvyKIq76Q-_CuaGa4SGvLsRv2Ud4',
  },
  {
    name: 'Male Buyer',
    description:
      'You are pure-blood vampire, captured and caged, left to starve. The seller sees your value, ready to make a fortune off your bloodline. By Detailed_Writer2_0',
    tags: ['Fantasy', 'Thriller'],
    link: 'https://c.ai/c/zQtwy7Sne4TrpdypdA3TKqD53Uso0CmBmomoYOLkMVQ',
  },
  {
    name: 'Nyx',
    description:
      'Your academic rival, always ahead. But his soft spot for you? That’s the real mystery. By XinDark_',
    tags: ['Modern', 'Romance', 'Teenage'],
    link: 'https://c.ai/c/cFacjQTT46U1wi7V0MxobdYvV6Qxz7Ru3dr5ZN4q6TE',
  },
  {
    name: 'Atlas',
    description: 'Knight, childhood friend who wants to kill you. By girlryou',
    tags: ['Angst', 'Historical', 'Teenage'],
    link: 'https://c.ai/c/m6_0tepC2VOdXwiLGxQdbr0BqEDAN6_MzHZUpLU_zdE',
  },
  {
    name: 'Corrupt Emperor',
    description:
      'An emperor on trial, accused of corruption. Soldiers drag him to the beheading tool. In his final words, he swears innocence, his gaze on you — his last confession of love. By M0rphinee',
    tags: ['Angst', 'Historical', 'Romance'],
    link: 'https://c.ai/c/sWBt_ZIQRVwOhNZzQcfSflJMsNxSeqoi0RQHRJzrjm4',
  },
  {
    name: 'Shichiro',
    description: 'Your blind emperor and you are his servant. By girlryou',
    tags: ['Angst', 'Historical'],
    link: 'https://c.ai/c/iNxoW4s88IemlSp6edGDDyoUUEPORksOrsp0FPbQJYQ',
  },
  {
    name: 'Chase',
    description: 'Your enemy who partnered with you on a project. By aezybots',
    tags: ['Modern', 'Romance', 'Teenage'],
    link: 'https://c.ai/c/QO4BDQ6bqWO9dUur0wnOz2XzmcpwUKnGWWRa4A3FHWw',
  },
  {
    name: 'Elric',
    description: 'A cop who is determined to catch you. By sailovematcha',
    tags: ['Adventure', 'Drama', 'Modern'],
    link: 'https://c.ai/c/W_kgiv0SPj6uXtC7wnGmGFmJMGeLTGRKGrlF_-XVR4M',
  },
  {
    name: 'Anteros',
    description:
      'Ex-husband picks up your kid, but lingers — not for co-parenting talk, but for a kiss. Bold for a man you divorced. By ashlxxll',
    tags: ['Modern', 'Romance'],
    link: 'https://c.ai/c/L7I5r2gzKHSd-Ia9xkJ9PYOsV_U0wHsuh5H0uZJ90NY',
  },
  {
    name: 'Kai and Kev',
    description:
      'You kissed the wrong twin — thought it was Kev, but those blue eyes screamed Kai. Oops... By hyerabotscaitiktok',
    tags: ['Dama', 'Modern', 'Romance'],
    link: 'https://c.ai/c/XA5IKRP_hEEUcIatoHW6zh1NMS8QZhGEOYq63OZKQAw',
  },
  {
    name: 'North',
    description:
      'Rival North dares challenge you in class; wins this round, smug and stoic. Your pride? Wounded. The war? Just begun. By Astralla_',
    tags: ['Drama', 'Modern', 'Teenage'],
    link: 'https://c.ai/c/29NhZUBr4DK9T5W0gsAy5yLXAy6Q4XKhMrMCHZrKKqo',
  },
  {
    name: 'Ophion The Serpent',
    description:
      "A divine beast with the form of a serpent with bird-like wings, he's both worshiped and blamed for the suffering of the villagers. By Cattarin",
    tags: ['Fantasy', 'Non Human'],
    link: 'https://c.ai/c/tUndUPtSnFb2g_e2ruLJ5NiJd7h751pNVZ6Mu1Hqjd4',
  },
  {
    name: 'Nox The Horror',
    description:
      'A monster from the spooky stories who lives in the heart of the forest. By Cattarin',
    tags: ['Adventure', 'Fantasy', 'Non Human'],
    link: 'https://c.ai/c/i0MbPf6LNGDHvjEjqK3hLC_qcO83qpxmDO1ImPPGiRM',
  },
  {
    name: 'Onyx The Evil',
    description:
      'God of chaos born from a God remains, he was never saw as equal by the other gods and sealed his power, it was supposed to be for eternity.. until you broke it, and linked your soul. By Cattarin',
    tags: ['Fantasy', 'Non Human', 'Romance'],
    link: 'https://c.ai/c/fQHJdX7v3v5esSngnRh2VLVjnpvObCoKhBThC19taX8',
  },
  {
    name: 'Eiran The Hybrid',
    description:
      "An abandoned dragon you rescued, now he's the one helping you. By Cattarin",
    tags: ['Fantasy', 'Non Human'],
    link: 'https://c.ai/c/c38aFnzM1Fp6kmtgzNCTkw5TOzzmrbYeQsMcbiqkF6Q',
  },
  {
    name: 'Aurelio The Ghost',
    description:
      'When still alive, you both planned to run together only to be seperated, and when he opened his eyes once more.. you were here, the lover he lost. By Cattarin',
    tags: ['Fantasy', 'Non Human', 'Romance'],
    link: 'https://c.ai/c/h1VAIJpLvylOjw2yNuEXS5EJenxclRlCBrh18bPTseM',
  },
  {
    name: 'Argus The Oni',
    description:
      'He got captured and forced to fight his own kind, but too docile to fight back he was just beaten up. By Cattarin',
    tags: ['Fantasy', 'Non-Human'],
    link: 'https://c.ai/c/bmt_gru_8P2-VKIRS54VTF9sOZbtZAh5Nom9KXoEPZw',
  },
  {
    name: 'Otto Miller',
    description:
      "Older men seasonal lawyer drawing near to his retirement, he's willing to settle down or 'take it easy'. By Cattarin",
    tags: ['Modern', 'Romance'],
    link: 'https://c.ai/c/Ntm_KqIwFeiqQNi4f-8Oo8HpMbWpwsHOHQCb7uSuYVM',
  },
  {
    name: 'Emil Bohn',
    description:
      "He's jealous, possesive, 'smooth af', and flirty 'as hell'; Your CEO lover. By Cattarin",
    tags: ['Modern', 'Romance'],
    link: 'https://c.ai/c/HgA8OlfTZVt88D6W14F_u-zsnnljjWLK0s6A2kqoDUE',
  },
  {
    name: 'Issak Novikov',
    description:
      'The legend of a demon, who stole the wing of an angel. By Cattarin',
    tags: ['Non Human', 'Modern', 'Thriller'],
    link: 'https://c.ai/c/3wcNMWwJ21nKjK8fd89bkaQbMpw5Ze97oiQebTMaCB4',
  },
  {
    name: 'Deimos',
    description: 'The God whose seal you broke. By Munxziii',
    tags: ['Adventure', 'Romance'],
    link: 'https://c.ai/c/n8Muyyg-dtkCJFKdac-3SXg6ZzFj4PXIk_pcSaRzqiA',
  },
  {
    name: 'Nine No.9388',
    description:
      "He's so clingy yet deadly; the best test subject but a beast with everyone exept you, for now at least. By Cattarin",
    tags: ['Non Human', 'Modern', 'Romance', 'Sci-fi', 'Thriller'],
    link: 'https://c.ai/c/1AIWTsqEnUQWzDMY9PFDytxu-nVlOR6s2ST5TMPqEEg',
  },
  {
    name: 'Quade No.9408',
    description:
      'Stundere Quade Supremency; a lab rat who got inspired to change after meeting you, a staff member. By Cattarin',
    tags: ['Modern', 'Non Human', 'Romance', 'Sci-fi'],
    link: 'https://c.ai/c/M3dCUxgueljDEf69lN5P5qg9YvZV9HXmHcJDJei13zc',
  },
  {
    name: 'Quinn Harrison',
    description:
      "He's so disturbing it's perfect; a prodigy among his peers, but also a mad scientist with favourite experiment you. By Cattarin",
    tags: ['Non Human', 'Modern', 'Sci-fi', 'Thriller'],
    link: 'https://c.ai/c/Y6g9EujUldAuj6lu2FtpKmcKRdXbmhPk3O9fvYLhftI',
  },
  {
    name: 'Leif Ragnar',
    description:
      "You're a valkyrie, he's a viking who's conviced you're made for him. By PetitMoineau",
    tags: ['Adventure', 'Historical', 'Romance'],
    link: 'https://c.ai/c/Zitdwg3IBuP8h1c2Z00ZyoldBTJ9aAbw9tz4IN7XwJQ',
  },
  {
    name: 'Levi',
    description: "Your enemy dosen't recognize you. By claudyzbots",
    tags: ['Drama', 'Modern', 'Romance', 'Teenage'],
    link: 'https://c.ai/c/7xOJgb0grxfi8tqpUrdaNjxfzdMGB6IBHbkom65kus8',
  },
  {
    name: 'Ishan',
    description:
      "You manipulate water, and he's the Sun Empire's Emperor. By Desnight",
    tags: ['Fantasy', 'Historical', 'Romance'],
    link: 'https://c.ai/c/7s7Wi3aHic-l62DqvyVc0uZBWA0nJFBjDOPa_j7bKSU',
  },
  {
    name: 'Reginald',
    description: 'White Snow and Cold Blood. By Desnight',
    tags: ['Historical', 'Romance'],
    link: 'https://c.ai/c/lSEELAPxdEyMeKTYWJX92IWK-aG9iMfgoYrMCSKX_ug',
  },
  {
    name: 'Adonis',
    description: 'Childhood friend buys you. By kurizai',
    tags: ['Modern', 'Romance', 'Thriller'],
    link: 'https://c.ai/c/c_C1TteoqNm2gDN_QPaPtlouuhAu15reUlazaaJFygU',
  },
  {
    name: 'Wyn Faejyre',
    description: "Fae folk: You're a dragon, he's the warlord. By PetitMoineau",
    tags: ['Adventure', 'Fantasy', 'Historical', 'Non Human'],
    link: 'https://c.ai/c/6DTOB85bpoDVUfaW1-Wdw3z7mDhoj_gxE_BypCQmgCg',
  },
  {
    name: 'Kane',
    description: 'Jealous basketball player. By claudyzbots',
    tags: ['Modern', 'Romance', 'Teenage'],
    link: 'https://c.ai/c/H9H5LhJJ-qlsfnwQKp6_MJ7EqCMbwzmnWQiQpjztgl4',
  },
  {
    name: 'Iziah',
    description: "It's just a dare, so what? By _kozukenxx",
    tags: ['Angst', 'Drama', 'Modern', 'Teenage'],
    link: 'https://c.ai/c/9HgPONX9TSs468o--0ip6AGErMSvdICiMBTqwS5Wh0E',
  },
  {
    name: 'Deadpool',
    description:
      'Comedic, chimichanga, morally grey, self aware. By Darksoul5832',
    tags: ['Comedy', 'Drama', 'Modern'],
    link: 'https://c.ai/c/KsIww1HtsoxkvoObvH6oBOniRcdCu6R7LhulBYDi_mU',
  },
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [excludedTags, setExcludedTags] = useState<string[]>([]); // Tags exclus
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(true); // Mode nuit par défaut

  const handleNavigate = () => setCurrentPage('navigate');
  const handleCreateBot = () => setCurrentPage('createBot');
  const handleHome = () => setCurrentPage('home');
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Fonction pour surligner les mots-clés
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Fonction pour ajouter ou retirer un tag sélectionné
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prev) => prev.filter((t) => t !== tag)); // Retirer
    } else {
      setSelectedTags((prev) => [...prev, tag]); // Ajouter
    }
  };

  // Fonction pour exclure ou inclure un tag
  const toggleExcludeTag = (tag: string) => {
    if (excludedTags.includes(tag)) {
      setExcludedTags((prev) => prev.filter((t) => t !== tag)); // Retirer l'exclusion
    } else {
      setExcludedTags((prev) => [...prev, tag]); // Ajouter l'exclusion
    }
  };

  // Filtrer les bots selon les tags sélectionnés et exclus
  const filteredBots = bots.filter((bot) => {
    const matchesTags = selectedTags.every((tag) => bot.tags.includes(tag));
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      bot.name.toLowerCase().includes(lowerSearch) ||
      bot.tags.some((tag) => tag.toLowerCase().includes(lowerSearch)) ||
      bot.description.toLowerCase().includes(lowerSearch);

    // Exclure les bots avec les tags exclus
    const matchesExcludeTags = excludedTags.every(
      (tag) => !bot.tags.includes(tag)
    );

    return matchesTags && matchesSearch && matchesExcludeTags;
  });

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="sidebar">
        <h3>Filters</h3>
        <button onClick={handleCreateBot}>✍️Want to add a bot?</button>
        <button onClick={handleNavigate}>🔍 Browse Bots</button>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? '🌞 Switch to Day Mode' : '🌙 Switch to Night Mode'}
        </button>
      </div>

      <div className="main-content">
        {currentPage === 'home' && (
          <div>
            <h1>Welcome to the Bot Browser!</h1>
            <p>Explore bots, search and filter them.</p>
            <button onClick={handleNavigate}>🚀 Go to Navigation</button>
          </div>
        )}

        {currentPage === 'navigate' && (
          <div>
            <h1>Browse Bots</h1>

            <div className="search-filters">
              <input
                type="text"
                placeholder="Search by name, tags or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <h4>Tags</h4>
              <div className="tags-container">
                {[
                  'Adventure',
                  'Angst',
                  'Comedy',
                  'Drama',
                  'Fantasy',
                  'Historical',
                  'Modern',
                  'Non Human',
                  'Romance',
                  'Sci-fi',
                  'Teenage',
                  'Thriller',
                ].map((tag) => (
                  <div key={tag} className="tag-label">
                    <span>{tag}</span>
                    <button
                      onClick={() => toggleTag(tag)}
                      className={`tag-btn plus ${
                        selectedTags.includes(tag) ? 'active' : ''
                      } ${isDarkMode ? 'dark' : 'light'}`}
                      disabled={excludedTags.includes(tag)} // Désactive le + si le tag est exclu
                    >
                      +
                    </button>
                    <button
                      onClick={() => toggleExcludeTag(tag)}
                      className={`tag-btn minus ${
                        excludedTags.includes(tag) ? 'active' : ''
                      } ${isDarkMode ? 'dark' : 'light'}`}
                      disabled={selectedTags.includes(tag)} // Désactive le - si le tag est sélectionné
                    >
                      –
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <h2>Results ({filteredBots.length})</h2>
            {filteredBots.length === 0 ? (
              <div className="no-results">
                <p>😴 No bots found... Maybe later?</p>
              </div>
            ) : (
              <div className="bot-grid">
                {filteredBots.map((bot, index) => (
                  <div className="bot-card" key={index}>
                    <h3>{highlightText(bot.name, searchTerm)}</h3>
                    <p>
                      <strong>Tags:</strong>{' '}
                      {highlightText(bot.tags.join(', '), searchTerm)}
                    </p>
                    <p>{highlightText(bot.description, searchTerm)}</p>
                    <a href={bot.link} target="_blank" rel="noreferrer">
                      View on C.ai
                    </a>
                  </div>
                ))}
              </div>
            )}

            <button onClick={handleHome}>Back to Home 🏠</button>
          </div>
        )}

        {currentPage === 'createBot' && (
          <div>
            <h1>Want to add a bot?</h1>
            <p>
              For feedback and requests to put in the list, send me an email:
              ventilateur.requestfeedback@gmail.com
            </p>
            <p>
              Also, it's a website I made on my own without a lot of
              technological knowledge so it might not be the best.. wish you all
              a good RP!
            </p>
            <p>
              {' '}
              (Do not hesitate to send me an email for any spelling or
              grammatical mistakes too, i'm not a native english speaker)
            </p>
            <button onClick={handleHome}>Back to Home 🏠</button>
            <p> Last Updated: 22.04.2025 16H39</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
