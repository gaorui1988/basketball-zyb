// 类型定义
type ActivityStatus = 'registering' | 'upcoming' | 'full' | 'ended'

// Mock 排行榜
const MOCK_LEADERBOARD = [
  { id: 'l1', rank: 1, name: '科比铁粉24', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC32aRxHjT7udRfEgt7ZHmedWBKxmfFXMWHjgEFCAC0r8tCDhgRBfj654gWb8WJKT6vWoGy1X-iEdHyIUMy-6ZySeV4jlVL_5I24Y_REyScbjkWx_olj7J4QmBh2ceNXelu8NCIIoCKaBWzkHbFvZHl-6nFeGo-0RgqzWgHgs7wfvLGeUSU6f722Mm6Aw0y9QS5cHHBQvTCbYd9lYsMGCx8teXA3CtMOn65xjuaYfo6PtKwa20g57XbvNpfxJR8VElDlpEo_nb6T401', pts: 1850, mvpCount: 24 },
  { id: 'l2', rank: 2, name: '李磊', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNHh2OpOSOAIiKxBOP3fcptQFF2CvKtXqC5KmjLz65zZkewGaA24I16PHpSGt5-W7_iXAsyHoU_4dChNp6qur1r-dwSpMP7Kl5gOXdaDM0W86QK2O7Nf7ZArIEWF4qNfwIZuegWPG30pE5-nksi-D9Szwr80R1QfKR994yi3jrDg9PYnyD6_1rehj0hnuVDgKVGE1nTEN3KCrolVvYBVKaRwG55wQ6d-RU4xVj7A5RA9Y1VGY_mayY360Btf7kU-9Q2VD2rtKHNhsa', pts: 1620, mvpCount: 18 },
  { id: 'l3', rank: 3, name: '詹姆斯', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOZC41vRv21X42-ntkl9-ev0SNgZkB_PuqBc-PiO31UsMw_tZb4o7lKTecPlATvDifhdOJulfU_ko43YOg1UObnhnmN0NlAtv-Zk-ZhNuQT2t3uJBexKecS8TErGDmbCEmO2Td91knUjHmC4NDWlsj3V4e18Kk0m8xZxqqjdpt4QOFNOCA52KJ2u3d4ZaQ9swulyPQDWkTU0_DA_VjpuUWB6ODMVEAMeXZNFW-WM__wn64ZAOMOj42sKiLTqkc3Ofe38SW0A92ndxV', pts: 1490, mvpCount: 15 },
  { id: 'l4', rank: 4, name: '亚历克斯', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFEJxbw-iaHIy74uGZ9vhGp1bAq0wWLzyqhn9mi-lrbUFiWOAryUCeWRp7a9Qr_U69yzyV5rVZ5tnWKaXl6fc3zqY5YK-S_7-uH5lvi3x-XKKrdZXFCL_NhDpjC16cY8SRSm2psk_wCcToVIrBt6fGBMb-laUXHPERnANyEA-X-687kLRisK-uU4EvwzcCIH9qWaQ92mmQZ1AuDj4aOq8oEn1MSd6gEPvmp1GVn8k7jypTOyq4pw3PIyo9a-olWYzTWmu3-KyynnkH', pts: 1380, mvpCount: 8 },
  { id: 'l5', rank: 5, name: '王大锤', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKLL-rNb5W-PejvJ0dFRIjcJ0EO950aOyrpp5_6wkRiuexTE1u_Jlrq0v8zCHhCyyI-4d5rVbNs_3OSuSwxT9zumN0Kk0Va5G7HT-c_VU9Kk9bgFs05tPby2daQHRJ1Kj8uc9gTfqKqka54aQ7s2Mp0qpgpxrqfs6Wvgajiqvj-Vss7gplBQfbqAzYcrruVug8xk2to5o7H3lLtEOB7vxnIddIqwrIVt963ytMCuHN1zutJISDMoRcT_jh8R1duUEXaI92TUz4hWgj', pts: 1310, mvpCount: 6 },
  { id: 'me', rank: 6, name: '我 (当前用户)', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk31HSs6PSWifgknXC-qFqBmKxPc5aqvwn5BVHJHhgy44-J2bd00ZwP2xPNOFvLevT21k76wZ3_LNSu-a_nMDxU0L8ZQ2q3WU7jutxWDOlYIiaYIj2vOPGN2_rPLofLTxDIw-tX7WYNZ3jr8eYezXn9eYkuF9lzBMnyXBLejj9bPAGSP9E5jvIpREhhspRS5bk1hDN1bt9OvzNLzhS2WWTM4M2gVqTUNyPrGo3cLO9KI_O8wcF7BKoIq9S7r_I8bzK_iqu69YHjulg', pts: 1250, mvpCount: 5, isCurrentUser: true },
  { id: 'l7', rank: 7, name: '克里斯', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZyHJ4AugFjkLKIz3iFb5OIlED1XdvSCMWF7L5aQp0Brh8VGnpgd5gxnBMKVue6QecDY4RP388iW-UMQqddVnyc3udGWqe_vy9ES9P-JxwEH1m885HidMIhi1qZmi_2GcPKqEm5HK0SM5J4Sx4h-eLbeF1cSokDDC-0AvFrwVX5ht2setXT9AeTA3owOxIc4w8DqFgBVwhYdL6zU5kI7ocZulcfgESjYhKfw_D1aOLbTvDGxe087Vdj7gOnA_23b3gAp5KxTVKgAO', pts: 1190, mvpCount: 12 },
  { id: 'l8', rank: 8, name: '莎拉', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_DS5IF7u5Ehqqi5uy8L4op_Y9kfuoInYDE4eKCiF9f_ARvfLtCfuLryjdIR3MWX9nPUeV5d7qeMgfJb_VS2nUoednC7ubFIAeIJk9E9Ke11Pg5Jd8Ex2_A8pRdXvqdcnVXpqZa9vSizoEtpDVOttx8OOb4rk7SFXlbW9Ud12z6v9J8MFAIFysCJWtdTx8UmNJkZpp6cOSosadu9wgvQNTuvTbgiJvoCFIvtAOgA-pENPaYS7wnuVCf2Tc-Pq88Dk4FVopxTngUm4f', pts: 1050, mvpCount: 4 }
]

// Mock 活动
const MOCK_ACTIVITIES = [{
  id: '1',
  title: '日落球场 3v3',
  location: '静安区日落公园',
  address: '静安区汶水路210号, 3号场地 (室内全场)',
  distance: '2.4KM',
  time: '今天 18:30',
  cost: '¥45 / 人 (AA)',
  status: 'registering',
  joinedPlayersCount: 8,
  maxPlayersCount: 12,
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByWY7CogAVr514ffgchncYVJ9qgAaLN0DJ-LWK5LnwX0HA-xQ15rtO_873mWNF2k8sisrfovnJlggvBzQ5y6lmvrvtyufSzAs-NK26ckC0F-bgsPgAKW6guep-iQ_Frn9_3HPWieNq_wvGDQB-IOzV63QgL4dYHCUSQUmDxMttjzN7ShRFBs1q-EoGNsR5sGzkZd8VDQlu7ybhfGdiywZDQhVp-nKKEKUahuPyeQApBCpBbI2PteLzYo0eHfqTWLMa4hC_Ab-stW8h',
  organizer: {
    name: '阿强队长',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDz4oODPCkmsJwgPACVghygJRLYO5YdpKIzuPyKdEoRr6hDcT9VpuKXalUAVkuGFEpNy9kaLmnt2EKn67vLlY5tzvwL-aTSBXQcMeozfsvJkaJtW64y7mK-Uz8_lxFgVvn1JE0GOF1Z7Ow6sOqC3AclJpLd4b4I52d0cBMlQB64BINkv_svvvp26VVOBFprUzHASwLI00vbjRVUxBdN0BaUqJ2Az9zEbB5yKH0yHb--P8JjA4R147wFW-ccZ6MQi0-6PA3QbQdCPmC',
    position: 'SF / 小前锋',
    mvpCount: 12
  },
  rules: '"半场 4V4, 先到11分换人。尊重裁判，杜绝脏动作。"',
  players: [
    { id: 'p1', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYlEjovDEAdQOwbRXY8Gpez7YCeSbqsz6QRyRe991l4BxaZHen2TJKkLYgg1u4O3N62enG1fY6AOQR4ON6QA9kXWaf7hUacOF13wuuN1Fe4-hSETjxDdHh32WVzsbPaHX8s-mw4yfrnnniQNA7FHi6Fh5oZxP9YZgOWFhS8Emh8lyHnIldEAHX9Lfpxa3f7vvTYQUlvAXYeEmKSI01SnID0sh0H6-yMMVA9pmESldVINVd_KV1lvSlG_WAlT8N37AA45AeVjOAV3b6', name: '李磊' },
    { id: 'p2', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCUUFJvI68G1uiida0XEhS1ItYZz6fizMwyAc24Epn7xx8XnvVzkjgwaq8pTsOiZDsffoNxZF9M2V9CstOlyQxFBAeNhZ52j3dFc3C21-4hDjqhZAPsnHEm6L97ne1r-H-PxcU0wCCoonMYvuKcLRhjAo9DO1C37uMTf2bh7fhkX42gOtToDNpa4mojWB6P6farPUyFDmhsDnneXLTZBv7eNB5jkgOfoUmyvsggqvz7RPOcbYDs-ERvMLB7MTF2s1C6lXwAXH77vNi', name: '张伟' },
    { id: 'p3', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7dYHtbWLGpGuMWhn4CPOx-zdQ0spGOPStV37xvTT2QsfMReXCdrU0pLDybvfibva5ZAstrtUpxI0VBbdxOX88B6LBv6Tsxh608YESld6dENh6s8J1syzvfRDQzQx9DCDRcuWUcEFlCwkAvvHYj7vmU4BF5wirUCcu7ffYkdXTxoscjnQ0MJ_MFuLyDKDJ_UorBgg8i8TCFRxFjsWmZ_Qxcz-L9NBVJ3hrzWEhq9neSHB4y_fVk73qMdOAwavk0PlTLL-d9JhjpuVw', name: '王多鱼' }
  ]
}, {
  id: '2', title: '室内木地板 5v5', location: '静安体育中心 2号馆',
  time: '明天 14:00', cost: '¥60 / 人 (包场)', status: 'upcoming',
  joinedPlayersCount: 10, maxPlayersCount: 10,
  players: [
    { id: 'p4', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Bzs138pKJUAEcWXYAWpeM73z3W4JNMeROvCFOesJKd9F3Jki50YLUSt9zoj54-Ax0iY9rzxNKLTfASUGdwOUx2xllecSgBo0ts4WlP8feEGBwlShzhpM06Ds6IFSNC3EqlX-PvijIxRjEiCLwsRyZ0w5cGmI7sRtYZIdDDwJt7QvWjl3XqS7DYemzO6ZMdILVhxjP6ITCvi7Z78geb7gYj3NBnjqKIGBf5NAYjv5zqibxB4DOq_ZFOBzYiILZ883klgxJaWV0lUj', name: '王大壮' },
    { id: 'p5', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkt83a118U2ME4L61dIa-AdlAI8OglVHMho1pbyGrWuLLWHj5TvD71X0sImiVWsUssFEt7_Rk9X6U6s8dp_j09-RQWfPLZrS41157gMqH1imDwGTsXNTv21CYHQWUhAnDvpldMZgFGtrxXWczuKE8tAEktvERHP4KCsMAG-qeR-EkIbx_26XjwxKnjJuDS-n_WUWxT3muh2xiK6qtg-Ay53JaRAbwHbDxEXkB3XKONgwQJJC2CPem7xynnL6hSNdSHFLkYhzqy1Y1', name: '李阿狗' }
  ]
}, {
  id: '3', title: '周日早起局 4v4', location: '北区社区球场',
  time: '周日 08:00', cost: '免费', status: 'registering',
  joinedPlayersCount: 3, maxPlayersCount: 6,
  players: [
    { id: 'p6', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmp5TNK7qL7eNz7XAB1gV4S-_tgX1yoedC1T0zu9yRCx6zLwT2U_jgQ9DQDLe8L4mGOztwV0SlKoUSlXHD23UnGQHZg2V7XtPD4riNI7XKw4uZbs_DRYEOdru0XXCXu73hAgpnE7-aD6XzzRWc94jqF9rN1sz7TXMbZX6s933uIok-rnmq1u3SUC1SM0OmgFqz5LepknMUcblfoNH2ilufkTv7GpvLvysqyQ4ThfkXcpRuiFzZKKsFo9Bq3nwqtpi7c_OPDHG5t3M0', name: '赵六' }
  ]
}, {
  id: '4', title: '日落球场经典赛', location: '日落球场, 4号场地',
  time: '昨天 17:00', cost: '¥45 / 人', status: 'ended',
  joinedPlayersCount: 12, maxPlayersCount: 12,
  players: [],
  matchResult: {
    teamAScore: 21, teamBScore: 18,
    teamAAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3u8ap41BRrKMQye-QnKHxfUNNWQDO72lVPLR17ktAsbzzNVz9JH7zhdx7hrGecLPCo1GxJ3CXOYYZeJ_GJTCkCjCqc-mUYEEIsmTNuBZfps-Qfg0HfcXw3GsaCGuVhp2VMzw-hU7Y2jOyc9-3JWLDVC3htsz8_f6yDFvk-X_Vdy51ebupdc8fR_3-bQf8qAzcmLTFG2S5Mb9J2-rWZFXdA4GFEI-8okP9nhXSr3bwDaBLdVcJ6o95zB5CzwuFx0Ss8SnZa_MqzM2lH',
    teamBAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAujxkmT6uNFr-3QeWlc374WMiy4r21H2Av7FljCwvJs6KLL4leHBMgc2gcksCSIsspFRUcMM_gdUza2mSq3fqffpsrqYKoKJjHOsA19DqEKFK4T4xdVdVITjnKY2Uz3Y8jRwYZZlUnQPGmYKcCIVeEwWfXAKWvnQLstkXd5tZiyyN-g2emWoetwDCslPZcEKU2aJF5cwtAS1qGosa0C82wvfAovnzMTsMgCrrqU_08vkCUJPJd5uZiIfNwhvpKqkh8K-bpAFLkvly',
    courtNo: '4号场地'
  },
  participants: [
    { id: 'u1', name: '乔丹 W.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZKB7zc9K7z-1rpzqHJRL1BVqjmOko3LTxIcMVUYqOCPIW9ZOdmx4EuXiLdLjmD5BkQNFaO0paZSBaRNEgrU5VY9fBSzDTTeR0xOuPGLK6NSlLR-liGkogmmk_JpQTAdPygPE21nsNJNA3VcjBnM8RnUzC4jmlO7kouyeX4eA3iE9HIZgSCdcYVvn3kvhEuFTuz1Ke5ocOUmtMkNIWgDsNFJHbd-JR0kyaxOtqFGpwNQrYn7j80fESIJhQsO4SwLfrKSrz6ShwdaF4', position: '控卫', stats: { pts: 12, ast: 5, reb: 2 } },
    { id: 'u2', name: '马库斯 "城墙"', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnPOdDl67fvhdgb-hnrziXLq55zhiQx34Fe9b5W18_qTfTzyg-qWk8VNFfHdnaoZt3dOfyuL9gaTstNBJWLX0INvrlqP9hhSpOf6S93kIATb6gTAqExSNsxCkATaMiQ6iAA3JpYCjB6ybBoG1MhKQkYhFj1SvmoFTfWoDuIaJ3OXuofn2TfFoAagUmJD6RvyMCIHE1grfLMxBjv31_OmmvFUOgLM6wY8H96iOJPrW8jk6gZR756aLgtvChb1FAy59Wgzvr16j8TrEw', position: '大前', stats: { pts: 8, ast: 2, reb: 11 } },
    { id: 'me', name: '你 (Z-Wave)', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzpKXlzSSpCqPnAvViXTNF9dDrCAuIq98GMox_VSi8UbOo2RRVWFhC84ZYiTaWBucAXHaGHUYZUibwaMbI5fyfCnp2IvSxX7qOGoP8RPMtmZJXEDt_EY23_PhU_sKBj606mAOHUn9rOR2xcy2ZzOZlm_vn7PDdgNB8Vp39vlfojR2554TJuGk6eWsbxLk2kGskWL2SuMQARDm4VGMa2dwIRMjCYlBOJ0u7aJ9F_m2RU5SgswXY-0UAok3no-DQpLbwhJNiVOk44NnK', stats: { pts: 4, ast: 1, reb: 3 }, isCurrentUser: true }
  ]
}]

module.exports = { MOCK_ACTIVITIES, MOCK_LEADERBOARD }
