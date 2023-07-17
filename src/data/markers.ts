import altarOfLilithUrl from '../assets/icons/markers/altar_of_lilith.png'
import worldBossIconUrl from '../assets/icons/markers/world_boss.png'
import dungeonIconUrl from '../assets/icons/markers/dungeon.png'
import mysteriousChestIconUrl from '../assets/icons/markers/mysterious_chest.png'
import sideQuestIconUrl from '../assets/icons/markers/side_quest.png'
import waypointIconUrl from '../assets/icons/markers/waypoint.png'
import strongholdIconUrl from '../assets/icons/markers/stronghold.png'

export type Icon = {
  url: string
  width: number
  height: number
}

export type MarkerName =
  | 'altarOfLilith'
  | 'worldBoss'
  | 'dungeon'
  | 'mysteriousChest'
  | 'sideQuest'
  | 'waypoint'
  | 'stronghold'

export type MarkerCoordinate = {
  name: string
  lat: number
  lng: number
  reward?: string
  job?: string
}

export type Markers = {
  [K in MarkerName]: {
    text: string
    icon: Icon
    coordinates: Array<MarkerCoordinate>
  }
}

export const markers: Markers = {
  altarOfLilith: {
    text: 'markers.altarOfLilith',
    icon: {
      url: altarOfLilithUrl,
      width: 30,
      height: 30
    },
    coordinates: [
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -114.91141387650654,
        lng: 45.04022711154826
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -108.89888919105931,
        lng: 47.44548306982742
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -104.88177982642817,
        lng: 34.08370922170646
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -114.19443486123012,
        lng: 31.598486204982393
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -126.12276556888946,
        lng: 29.623579672463265
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -123.82832666237854,
        lng: 36.043329233660955
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -119.30152202128372,
        lng: 33.54314368813762
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -118.4199769222939,
        lng: 28.16166991966236
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -96.3357741286249,
        lng: 27.662899323822217
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -108.89479418826014,
        lng: 19.70557320571868
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -110.81705920727521,
        lng: 23.02274816823825
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -99.74202102533658,
        lng: 21.671731960573652
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -106.31715195866701,
        lng: 29.044635841600268
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -121.31096051715306,
        lng: 38.56201176360541
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -123.72568644833316,
        lng: 49.994355741542066
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -124.51160292080422,
        lng: 46.637418153276414
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -116.16616397880496,
        lng: 47.47237438635054
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -37.25516543426642,
        lng: 110.75709683397824
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -17.73764558212372,
        lng: 82.96452358110356
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -21.81821275991613,
        lng: 88.24117128659337
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -31.49037368794313,
        lng: 73.7749389642304
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -25.31516838769719,
        lng: 77.97357770504856
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -35.863483152036,
        lng: 69.50472749706927
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -45.695761635555755,
        lng: 70.40851725337937
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -47.16598548226523,
        lng: 60.726612422175975
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -48.94265694852129,
        lng: 102.21131330862947
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -52.71686488812248,
        lng: 97.05192116839532
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -53.330673401221205,
        lng: 91.19635908583933
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -39.592528219039146,
        lng: 79.18672068966323
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -43.837101731960914,
        lng: 80.88022564708744
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -52.44311837006568,
        lng: 89.36059228963468
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -24.92001534780312,
        lng: 90.89810993894683
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -32.28118059541177,
        lng: 94.32376323526111
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -39.8795319404026,
        lng: 91.03015131022069
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -15.433838251942781,
        lng: 81.89299445173866
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -35.340560132717414,
        lng: 102.2853307001109
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -36.30553723118389,
        lng: 109.33701147270284
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -41.63893958190819,
        lng: 96.96394267720751
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -54.441155671091295,
        lng: 71.84032522580065
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -49.33097516359948,
        lng: 76.86281611828088
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -56.405843740687686,
        lng: 78.86237547876254
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -46.116250663991465,
        lng: 106.88448217048114
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -44.27585624050803,
        lng: 119.45447905170855
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -47.496325528215614,
        lng: 119.28880144443319
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -52.53983703330078,
        lng: 124.31821397917292
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -59.364998820994934,
        lng: 110.78984945607428
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -56.31257195031234,
        lng: 115.3648782668252
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -49.99427723570977,
        lng: 117.72745567347023
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -52.39512729409554,
        lng: 110.73612573062178
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -55.64688358160684,
        lng: 102.61739280578598
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -82.24755039779146,
        lng: 113.88193850307414
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -87.00423494422392,
        lng: 119.57359020616573
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -92.03678716124223,
        lng: 116.35853155732146
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -78.52192274319626,
        lng: 115.8652982752889
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -81.03210053818435,
        lng: 121.19010293862678
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -80.11641077556689,
        lng: 113.62454177241115
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -71.95669052166815,
        lng: 105.85545486996926
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -68.00784102384044,
        lng: 107.43950951830277
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -74.7805042864402,
        lng: 111.59985832321732
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -64.01468300651669,
        lng: 98.99207222063265
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -87.07974208216834,
        lng: 106.3241825930235
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -90.40235075624084,
        lng: 101.70883153438635
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -80.58020666813772,
        lng: 101.80305423050615
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -69.67500799078343,
        lng: 89.67268472104617
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -85.34463931339162,
        lng: 84.93589565800079
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -78.99190533064353,
        lng: 95.26451750661664
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -79.76848283989634,
        lng: 89.88743235387189
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -79.73778504912846,
        lng: 97.04759146025853
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -83.227287182606,
        lng: 99.32516520919748
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -88.6732873800816,
        lng: 87.08734824883253
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -74.19863090308466,
        lng: 66.13960175327959
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -79.30819274108883,
        lng: 72.59893721744227
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -78.16869192620302,
        lng: 67.30558920913909
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -74.151140654795,
        lng: 62.2955278189291
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -57.3045642830726,
        lng: 67.9799633417927
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -68.72190345438938,
        lng: 57.18314393846589
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -61.80503128026486,
        lng: 64.88563580623229
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -60.652538406138525,
        lng: 60.40047052966753
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -58.48324749884255,
        lng: 61.98579169126555
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -80.9391528127787,
        lng: 71.21151611687236
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -82.29845805848905,
        lng: 76.49782466772865
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -69.49459218400557,
        lng: 60.58181755686651
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -90.17588826331115,
        lng: 74.52135708397654
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -86.81884032109309,
        lng: 48.585668999647226
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -82.63492587841228,
        lng: 57.72046955438134
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -76.37561098829849,
        lng: 57.65428687286173
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -87.64337944586427,
        lng: 58.28692497538039
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.oneParagonPoints',
        lat: -80.97665596791067,
        lng: 52.17879658484462
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -69.33739121324028,
        lng: 78.96269511083008
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -62.95935070240233,
        lng: 77.22212298604124
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.oneParagonPoints',
        lat: -71.1866532327133,
        lng: 74.34760913636458
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -66.44095743479946,
        lng: 46.711671175132636
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.oneParagonPoints',
        lat: -71.65083211115743,
        lng: 50.47789872441132
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -67.76735535585749,
        lng: 54.005697788197764
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -62.14836338545577,
        lng: 39.16351720285472
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -71.22291904886997,
        lng: 30.085120669086365
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -79.98749183852249,
        lng: 30.767771318654525
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -70.70768520746927,
        lng: 40.2298624639742
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -63.92429834041701,
        lng: 54.78522197560213
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -59.97182520701882,
        lng: 59.03051553062906
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -60.40837018168149,
        lng: 48.844450058762106
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -48.00855440353346,
        lng: 58.09933374324943
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.oneParagonPoints',
        lat: -83.05623979949819,
        lng: 37.85067311590639
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -99.17322808257697,
        lng: 116.22710871578144
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -98.96273315451887,
        lng: 109.83666568244846
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -96.49232696945077,
        lng: 114.299652249986
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -105.76594690562754,
        lng: 113.53509059138088
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -132.64754859010634,
        lng: 117.72294924255233
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -119.86904816461626,
        lng: 114.50279508685321
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -126.48194739714481,
        lng: 111.61199328751908
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -112.48861578153527,
        lng: 75.0558551353945
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -117.94625285746895,
        lng: 66.89211680897348
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -117.77090424839943,
        lng: 81.28813127964858
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -125.07845147374556,
        lng: 71.94479784322388
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -104.85102311475671,
        lng: 125.88518542533404
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -110.91427869819077,
        lng: 116.37013635327995
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -115.87689180265346,
        lng: 126.21094441848345
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -126.63187163631733,
        lng: 94.05473225484278
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -127.21943088686885,
        lng: 103.52948853280748
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -131.18857863598166,
        lng: 102.7840718421542
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -130.4056376691416,
        lng: 93.66835734777821
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -92.56990349688104,
        lng: 106.14324791898038
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -105.73015245669954,
        lng: 103.38822812311992
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -108.25429450583732,
        lng: 109.29397947550652
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -120.29115751790059,
        lng: 108.76702159608192
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -115.15929411788943,
        lng: 105.19813448569118
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -124.99808336125537,
        lng: 100.29378277237211
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -105.41498454342236,
        lng: 97.49605497108067
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -100.93104485968576,
        lng: 102.97016093064587
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -92.41644400349341,
        lng: 100.74940355582856
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: '獎勵: +5古幣',
        lat: -96.02879622094608,
        lng: 91.59059815666257
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -115.23919086315095,
        lng: 95.20929163752484
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -129.9207186326355,
        lng: 84.99450871373021
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -119.62735461810982,
        lng: 92.86904020889133
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -123.93426644702475,
        lng: 86.54410241975044
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -107.64735027800629,
        lng: 96.5772437783776
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -102.19162813143912,
        lng: 76.85881040190941
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -98.90817239779898,
        lng: 54.85667688675767
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -90.99002784859951,
        lng: 38.18559223987582
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -95.76845420845491,
        lng: 37.835975671278746
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -100.4195819561145,
        lng: 49.10278931092428
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -89.3628092542873,
        lng: 28.73192488045494
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -100.97226003174359,
        lng: 34.78406160318083
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -95.59843794115984,
        lng: 50.232165697300516
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -88.33820420139261,
        lng: 44.300465549889964
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -114.17996977939997,
        lng: 55.62727657371683
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -106.77384788235582,
        lng: 50.0268727332633
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -104.71521043199283,
        lng: 67.2543985102156
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -99.67205245232918,
        lng: 59.51718061596428
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -102.28831733422241,
        lng: 73.7856601462834
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -93.61569061461458,
        lng: 68.00541142227019
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -38.5876911292973,
        lng: 69.66996329739189
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -75.07154408969927,
        lng: 127.3381706776897
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -65.4569194240232,
        lng: 119.60251383467138
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -74.64660653304287,
        lng: 122.08585180839712
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoWillpower',
        lat: -71.2124900489354,
        lng: 94.88506424181159
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.pulsFiveObolsMax',
        lat: -65.18405671952019,
        lng: 88.97580788759996
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoIntelligence',
        lat: -67.78011173148369,
        lng: 102.82439409004041
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoStrength',
        lat: -63.47888576976475,
        lng: 94.43300736777388
      },
      {
        name: 'coordinates.altarOfLilith',
        reward: 'rewards.plusTwoDexterity',
        lat: -87.48196563049262,
        lng: 91.7696772415042
      }
    ]
  },
  worldBoss: {
    text: 'markers.worldBoss',
    icon: {
      url: worldBossIconUrl,
      width: 30,
      height: 30
    },
    coordinates: [
      {
        name: 'coordinates.worldBoss',
        lat: -81.93096838282823,
        lng: 129.68431286569302
      },
      {
        name: 'coordinates.worldBoss',
        lat: -125.31180771239471,
        lng: 81.24427457614048
      },
      {
        name: 'coordinates.worldBoss',
        lat: -94.78149961295117,
        lng: 61.72350563032562
      },
      {
        name: 'coordinates.worldBoss',
        lat: -34.915033367025174,
        lng: 99.9489377188646
      },
      {
        name: 'coordinates.worldBoss',
        lat: -82.75085275621615,
        lng: 79.2013297729003
      }
    ]
  },
  waypoint: {
    text: 'markers.waypoint',
    icon: {
      url: waypointIconUrl,
      width: 30,
      height: 30
    },
    coordinates: [
      {
        name: 'coordinates.theOnyxWatchtower',
        lat: -67.24914600882575,
        lng: 59.90305480848242
      },
      {
        name: 'coordinates.farobru',
        lat: -52.667253487303746,
        lng: 65.48086758675278
      },
      {
        name: 'coordinates.altarOfRuin',
        lat: -92.14255018317763,
        lng: 37.027557309165545
      },
      {
        name: '奇歐瓦夏',
        lat: -76.97675150712641,
        lng: 102.33336984277153
      },
      {
        name: '命運藏身處',
        lat: -65.80313865348977,
        lng: 72.73362943043253
      },
      {
        name: '馬格雷夫',
        lat: -88.3550261193662,
        lng: 100.62923206468484
      },
      {
        name: '梅內斯德',
        lat: -68.14707111901225,
        lng: 94.72978382482391
      },
      {
        name: '大熊部族營地',
        lat: -71.05013349910641,
        lng: 117.51350329315943
      },
      {
        name: '葉雷斯納',
        lat: -89.41303932459368,
        lng: 113.5480502619944
      },
      {
        name: '艾祖達',
        lat: -79.51061550535574,
        lng: 37.01689503470624
      },
      {
        name: 'coordinates.theRuinsOfQaraYisu',
        lat: -88.04580921735112,
        lng: 72.10546830503492
      },
      {
        name: '克巴杜',
        lat: -58.35807003917582,
        lng: 53.555908856517405
      },
      {
        name: '馬羅文',
        lat: -27.226562500000778,
        lng: 72.37499999999967
      },
      {
        name: '肥鵝之下旅店',
        lat: -52.259668136753184,
        lng: 106.70454892553087
      },
      {
        name: '布拉斯泰',
        lat: -34.880270033909916,
        lng: 87.256707580714
      },
      {
        name: '提爾梅爾',
        lat: -47.708676464736634,
        lng: 109.110393959747
      },
      {
        name: '科瑞迦',
        lat: -47.28488786570015,
        lng: 87.65727921785975
      },
      {
        name: '死水鎮',
        lat: -125.41706990664966,
        lng: 120.54786289833535
      },
      {
        name: '塔薩拉克',
        lat: -106.53012156467568,
        lng: 63.3497970233405
      },
      {
        name: '鐵狼衛隊營地',
        lat: -102.48555505897383,
        lng: 32.3992760337117
      },
      {
        name: '登沙爾',
        lat: -117.07004010025358,
        lng: 44.35371801459287
      },
      {
        name: '威金哈尼',
        lat: -99.46968860896584,
        lng: 91.87014414255597
      },
      {
        name: '諾斯托瓦',
        lat: -80.53100771364407,
        lng: 88.97268578513396
      },
      {
        name: '圖爾鐸拉',
        lat: -40.48406041118665,
        lng: 66.62355708930474
      },
      {
        name: '拉哈特堡壘遺跡：內部庭院',
        lat: -110.05055717253545,
        lng: 97.46368524834367
      },
      {
        name: '帝國書庫',
        lat: -101.41522738489705,
        lng: 38.311625036592474
      },
      {
        name: '寇巴克',
        lat: -39.66046402087286,
        lng: 100.6852237324947
      },
      {
        name: '札賓寨',
        lat: -118.06683448665603,
        lng: 74.9203676698893
      },
      {
        name: '吉庫爾',
        lat: -121.34374999999824,
        lng: 24.281250000000284
      },
      {
        name: 'coordinates.vyeresz',
        lat: -125.81761420922177,
        lng: 97.08414362214808
      },
      {
        name: 'coordinates.firebreakManor',
        lat: -52.33016699789286,
        lng: 82.37491747578123
      },
      {
        name: '低語之樹',
        lat: -97.10109774529298,
        lng: 116.87403190977183
      },
      {
        name: '涅維斯克',
        lat: -88.09798367747581,
        lng: 89.97382034002986
      },
      {
        name: '隱密高地',
        lat: -74.88812331683856,
        lng: 72.97429640448532
      },
      {
        name: '吉倫戴',
        lat: -91.25201964639106,
        lng: 53.16758999886082
      }
    ]
  },
  dungeon: {
    text: 'markers.dungeon',
    icon: {
      url: dungeonIconUrl,
      width: 30,
      height: 30
    },
    coordinates: [
      {
        name: '哀悼平原',
        reward: '獎勵: 狂暴撕扯之 精華',
        job: 'jobs.barbarian',
        lat: -65.79580300099343,
        lng: 65.00786906315545
      },
      {
        name: '黑瑪瑙堡',
        reward: '獎勵: 暴風增長 精華',
        job: 'jobs.sorcerer',
        lat: -66.86996053380324,
        lng: 59.4833676571817
      },
      {
        name: '崩塌的赫克馬',
        reward: '獎勵: 分裂能量之 精華',
        job: 'jobs.sorcerer',
        lat: -120.54151243723408,
        lng: 39.5328089077469
      },
      {
        name: '海濱傾灣',
        reward: '獎勵: 報復之 精華',
        job: 'jobs.druid',
        lat: -58.21091508247181,
        lng: 47.0427613055117
      },
      {
        name: '棄誓者石墓',
        reward: '獎勵: 巨猛 精華',
        job: 'jobs.necromancer',
        lat: -88.13245240607313,
        lng: 37.23756288069859
      },
      {
        name: '黑暗深谷',
        reward: '獎勵: 力量之 精華',
        lat: -56.151217055844285,
        lng: 60.32760183626321
      },
      {
        name: '聖光守望',
        reward: '獎勵: 烈燃之 精華',
        job: 'jobs.sorcerer',
        lat: -83.68943328987645,
        lng: 100.48054929819133
      },
      {
        name: '巨鎚林地',
        reward: '獎勵: 消解 精華',
        job: 'jobs.barbarian',
        lat: -87.63277368321893,
        lng: 103.38681434087115
      },
      {
        name: '火山口之門',
        reward: '獎勵: 躲避 精華',
        lat: -66.85523030790694,
        lng: 85.57760552994893
      },
      {
        name: '廢棄小屋',
        reward: '獎勵: 爆魄之 精華',
        job: 'jobs.rogue',
        lat: -75.22526872715302,
        lng: 88.78014631513237
      },
      {
        name: '諾斯托瓦密林',
        reward: '獎勵: 撕裂血肉 精華',
        job: 'jobs.necromancer',
        lat: -72.19010568122089,
        lng: 88.24158363974927
      },
      {
        name: '慈悲之觸',
        reward: '獎勵: 鮮血尋覓者 精華',
        job: 'jobs.necromancer',
        lat: -58.793141991248866,
        lng: 90.81513859322334
      },
      {
        name: '科卓岡兵營',
        reward: '獎勵: 失血之 精華',
        job: 'jobs.barbarian',
        lat: -60.72471651303039,
        lng: 102.05073120820899
      },
      {
        name: '禁忌之城',
        reward: '獎勵: 夜嚎 精華',
        job: 'jobs.druid',
        lat: -63.52929260278188,
        lng: 95.85005898797382
      },
      {
        name: '神聖藏骨堂',
        reward: '獎勵: 絕情狂怒之 精華',
        job: 'jobs.barbarian',
        lat: -77.52339019013802,
        lng: 114.10590517431358
      },
      {
        name: '黑色收容所',
        reward: '獎勵: 苦痛之 精華',
        job: 'jobs.necromancer',
        lat: -71.56410054108002,
        lng: 110.08484337469775
      },
      {
        name: '荒棄採石場',
        reward: '獎勵: 環繞刀刃之 精華',
        job: 'jobs.rogue',
        lat: -69.19515615198563,
        lng: 104.81582420259178
      },
      {
        name: '白霜之歿',
        reward: '獎勵: 浴血 精華',
        job: 'jobs.necromancer',
        lat: -67.12821085421714,
        lng: 119.47792427400033
      },
      {
        name: '穹頂',
        reward: '獎勵: 充能 精華',
        job: 'jobs.sorcerer',
        lat: -68.25934490079383,
        lng: 126.51900167972664
      },
      {
        name: '亡者浚灘',
        reward: '獎勵: 穿刺冰寒之 精華',
        job: 'jobs.sorcerer',
        lat: -88.36701652324578,
        lng: 120.59852342891556
      },
      {
        name: '古拉恩運河',
        reward: '獎勵: 欺詐師 精華',
        job: 'jobs.rogue',
        lat: -75.51356870839535,
        lng: 70.35879924429832
      },
      {
        name: '古拉恩貧民窟',
        reward: '獎勵: 分裂 精華',
        job: 'jobs.necromancer',
        lat: -74.46459986186821,
        lng: 72.37709121957596
      },
      {
        name: '呢喃秘庫',
        reward: '獎勵: 動盪灌注之 精華',
        job: 'jobs.rogue',
        lat: -74.14000460401739,
        lng: 82.95247697819232
      },
      {
        name: '幻流秘城',
        reward: '獎勵: 貪婪 精華',
        job: 'jobs.rogue',
        lat: -85.47953872214993,
        lng: 73.56069204595111
      },
      {
        name: '暗淡洞穴',
        reward: '獎勵: 元素師 精華',
        job: 'jobs.sorcerer',
        lat: -88.8949478193691,
        lng: 75.64060136423673
      },
      {
        name: '苦痛廢墟',
        reward: '獎勵: 飢渴難饜之 精華',
        job: 'jobs.druid',
        lat: -84.67930447010765,
        lng: 90.52163150762352
      },
      {
        name: '失落秘庫',
        reward: '獎勵: 保衛者之 精華',
        lat: -90.08939237684808,
        lng: 87.20245368691823
      },
      {
        name: '遭褻瀆的墓室',
        reward: '獎勵: 淬鍊打擊之 精華',
        job: 'jobs.barbarian',
        lat: -89.05845332681801,
        lng: 92.83684720893544
      },
      {
        name: '卡利貝爾的礦井',
        reward: '獎勵: 不懈武師之 精華',
        job: 'jobs.barbarian',
        lat: -23.942311334162255,
        lng: 80.19321583558562
      },
      {
        name: '嚎叫獸穴',
        reward: '獎勵: 箭矢風暴之 精華',
        job: 'jobs.rogue',
        lat: -36.2819983302016,
        lng: 77.9616783711216
      },
      {
        name: '沉沒遺跡',
        reward: '獎勵: 先祖力量之 精華',
        job: 'jobs.barbarian',
        lat: -22.636329506196507,
        lng: 86.69101795843302
      },
      {
        name: '舊石堆',
        reward: '獎勵: 躁進者 精華',
        lat: -49.421124146084836,
        lng: 103.56857372122606
      },
      {
        name: '薩拉特的巢穴',
        reward: '獎勵: 雪幕 精華',
        job: 'jobs.sorcerer',
        lat: -55.34836082359248,
        lng: 92.77708545512891
      },
      {
        name: '蟲巢',
        reward: '獎勵: 腫脹詛咒之 精華',
        job: 'jobs.necromancer',
        lat: -56.37382022958914,
        lng: 111.1965474829646
      },
      {
        name: '低語松林',
        reward: '獎勵: 彈道 精華',
        job: 'jobs.druid',
        lat: -52.03809607882108,
        lng: 123.8336695672108
      },
      {
        name: '馬達斯守望',
        reward: '獎勵: 蓄能 精華',
        job: 'jobs.sorcerer',
        lat: -59.60931434771092,
        lng: 107.65517021883082
      },
      {
        name: '野性巢穴',
        reward: '獎勵: 流沙之 精華',
        job: 'jobs.druid',
        lat: -35.0184395528172,
        lng: 113.51565108546058
      },
      {
        name: '扭曲穴坑',
        reward: '獎勵: 暗影切割者 精華',
        job: 'jobs.rogue',
        lat: -36.3194131039782,
        lng: 111.22532384248603
      },
      {
        name: '古代水庫',
        reward: '獎勵: 遠古回聲之 精華',
        job: 'jobs.barbarian',
        lat: -103.44723258683953,
        lng: 118.93674021069768
      },
      {
        name: '鬼魅避難所',
        reward: '獎勵: 爭戰者 精華',
        job: 'jobs.barbarian',
        lat: -109.03599813370207,
        lng: 115.13790730830718
      },
      {
        name: '撒卡拉鐘樓',
        reward: '獎勵: 恐懼熊化之 精華',
        job: 'jobs.druid',
        lat: -117.25033806522427,
        lng: 124.50969311248795
      },
      {
        name: '巫水',
        reward: '獎勵: 奇才 精華',
        job: 'jobs.sorcerer',
        lat: -121.72800267272905,
        lng: 101.78063989110409
      },
      {
        name: '無面聖壇',
        reward: '獎勵: 不撓指揮官 精華',
        job: 'jobs.necromancer',
        lat: -127.72544360685848,
        lng: 113.93033109129698
      },
      {
        name: '艾瑞督遺址',
        reward: '獎勵: 獻祭 精華',
        job: 'jobs.necromancer',
        lat: -125.39155715539727,
        lng: 91.39961973789396
      },
      {
        name: '歌亞遺址',
        reward: '獎勵: 籠罩 精華',
        job: 'jobs.rogue',
        lat: -132.58073228544072,
        lng: 103.41511943964301
      },
      {
        name: '海獸之喉',
        reward: '獎勵: 虹吸飲食之 精華',
        job: 'jobs.rogue',
        lat: -132.3620178913325,
        lng: 97.73477799454145
      },
      {
        name: '墨根工坊',
        reward: '獎勵: 地擊者 精華',
        job: 'jobs.barbarian',
        lat: -118.17701657636036,
        lng: 94.66890282673712
      },
      {
        name: '目盲洞穴',
        reward: '獎勵: 暴風雨之 精華',
        job: 'jobs.druid',
        lat: -120.02321470884692,
        lng: 88.33259587201253
      },
      {
        name: '廢棄的礦道',
        reward: '獎勵: 懲戒之 精華',
        lat: -113.78066281580313,
        lng: 56.01217879093893
      },
      {
        name: '西洛克洞穴',
        reward: '獎勵: 迴盪狂怒之 精華',
        job: 'jobs.barbarian',
        lat: -94.34180236994669,
        lng: 57.26582074622091
      },
      {
        name: '詛咒大廳',
        reward: '獎勵: 不從之 精華',
        lat: -103.54666161163954,
        lng: 73.08192057817139
      },
      {
        name: '密議',
        reward: '獎勵: 換形毒債之 精華',
        job: 'jobs.druid',
        lat: -113.97068272986537,
        lng: 35.90913773521713
      },
      {
        name: '哈坎避難所',
        reward: '獎勵: 無情狂戰士 精華',
        job: 'jobs.barbarian',
        lat: -119.19885234678651,
        lng: 30.427668326439672
      },
      {
        name: '遺忘廢墟',
        reward: '獎勵: 鋼鐵之血 精華',
        job: 'jobs.barbarian',
        lat: -103.46873871664812,
        lng: 25.781214058330022
      },
      {
        name: '腐化石窟',
        reward: '獎勵: 纏繞觸鬚之 精華',
        job: 'jobs.necromancer',
        lat: -112.15144091076903,
        lng: 26.378124705270892
      },
      {
        name: '腐臭水層',
        reward: '獎勵: 堅定不移之 精華',
        job: 'jobs.sorcerer',
        lat: -106.32466437387413,
        lng: 33.820657362048465
      },
      {
        name: '奧杜爾洞穴',
        reward: '獎勵: 詛咒者之 精華',
        job: 'jobs.necromancer',
        lat: -106.48454624575254,
        lng: 26.692337810055534
      },
      {
        name: '異端收容所',
        reward: '獎勵: 精銳爭戰者 精華',
        job: 'jobs.barbarian',
        lat: -109.54254114182393,
        lng: 15.771753552369432
      },
      {
        name: '西弗塔廢墟',
        reward: '獎勵: 風擊者 精華',
        lat: -90.73012774288524,
        lng: 41.75633493946803
      },
      {
        name: '煉獄',
        reward: '獎勵: 復仇心切 精華',
        job: 'jobs.rogue',
        lat: -92.6675059736699,
        lng: 51.16346529986755
      },
      {
        name: '聖徒之墓',
        reward: '獎勵: 煽火 精華',
        job: 'jobs.sorcerer',
        lat: -88.23836273026751,
        lng: 30.083029449510093
      },
      {
        name: '沉沒書庫',
        reward: '獎勵: 控制之 精華',
        job: 'jobs.sorcerer',
        lat: -99.82306672821802,
        lng: 35.249961761737566
      },
      {
        name: '崩塌寶庫',
        reward: '獎勵: 颶風力量之 精華',
        job: 'jobs.druid',
        lat: -98.09141083230105,
        lng: 45.96752099774383
      },
      {
        name: '廢棄的地下通道',
        reward: '獎勵: 折磨 精華',
        job: 'jobs.necromancer',
        lat: -116.17270419910292,
        lng: 40.21813985282833
      },
      {
        name: '無盡大門',
        reward: '獎勵: 狂暴人獸之 精華',
        job: 'jobs.druid',
        lat: -109.39868575572069,
        lng: 77.01488607141201
      },
      {
        name: '信仰棱堡',
        reward: '獎勵: 巧技射擊 精華',
        job: 'jobs.rogue',
        lat: -106.36526087644432,
        lng: 77.16916505930682
      },
      {
        name: '大地之殤',
        reward: '獎勵: 焦黑肢體之 精華',
        job: 'jobs.sorcerer',
        lat: -121.56264115681722,
        lng: 70.21615450615886
      },
      {
        name: '失落堡壘',
        reward: '獎勵: 偏折屏障之 精華',
        lat: -108.102072351425,
        lng: 73.67859559473746
      },
      {
        name: '異教徒要塞',
        reward: '獎勵: 麻木憤怒之 精華',
        job: 'jobs.barbarian',
        lat: -94.84578231876262,
        lng: 96.31210069914333
      },
      {
        name: '聖光避難所',
        reward: '獎勵: 布爾凱索之 精華',
        job: 'jobs.barbarian',
        lat: -94.76111298031068,
        lng: 90.23749072942168
      },
      {
        name: '霜痕洞窟',
        reward: '獎勵: 深邃黑暗之 精華',
        job: 'jobs.necromancer',
        lat: -75.00319584154045,
        lng: 118.83957213489296
      },
      {
        name: '愛妮卡的礦坑',
        reward: '獎勵: 風暴爪 精華',
        job: 'jobs.druid',
        lat: -75.34629226311701,
        lng: 116.34854672018969
      },
      {
        name: '邪教徒庇難所',
        reward: '獎勵: 焰行者 精華',
        job: 'jobs.sorcerer',
        lat: -79.67067413994492,
        lng: 90.80344543587431
      },
      {
        name: '浸沒深淵',
        reward: '獎勵: 賦能收割者之 精華',
        job: 'jobs.necromancer',
        lat: -13.128852503690105,
        lng: 79.49663354010791
      },
      {
        name: '根底深處',
        reward: '獎勵: 期望之 精華',
        lat: -40.68174004271497,
        lng: 66.85359124269506
      },
      {
        name: '妖邪地洞',
        reward: '獎勵: 靜電糾纏之 精華',
        job: 'jobs.sorcerer',
        lat: -35.793367276769615,
        lng: 67.9831443518524
      },
      {
        name: '伊沙利聖殿',
        reward: '獎勵: 針焰 精華',
        lat: -101.36641141627672,
        lng: 38.891658657938905
      },
      {
        name: '叛徒藏身處',
        reward: '獎勵: 腐敗之 精華',
        job: 'jobs.rogue',
        lat: -108.63427541305822,
        lng: 46.124480281151904
      },
      {
        name: '聖教軍大教堂',
        reward: '獎勵: 風暴轉移 精華',
        job: 'jobs.druid',
        lat: -105.10167263860811,
        lng: 40.77620094172542
      },
      {
        name: '卡爾蒂姆監獄',
        reward: '獎勵: 搶得先機 精華',
        job: 'jobs.rogue',
        lat: -109.83325688011327,
        lng: 37.324215951028194
      },
      {
        name: '雷斯溫荒野',
        reward: '獎勵: 靜心之 精華',
        lat: -39.666267729876004,
        lng: 90.4970670410515
      },
      {
        name: '懺悔石洞',
        reward: '獎勵: 死亡之願 精華',
        job: 'jobs.barbarian',
        lat: -31.733275112973068,
        lng: 91.4927231897335
      },
      {
        name: '遺忘者秘庫',
        reward: '獎勵: 安魂曲 精華',
        job: 'jobs.necromancer',
        lat: -27.396431465036894,
        lng: 97.14640894868677
      },
      {
        name: '堅毅兵營',
        reward: '獎勵: 精力 精華',
        job: 'jobs.druid',
        lat: -109.97690604305397,
        lng: 96.92438622803935
      },
      {
        name: '阿克漢之握',
        reward: '獎勵: 荒疫之力 精華',
        job: 'jobs.necromancer',
        lat: -109.37293732085396,
        lng: 96.07113918712204
      },
      {
        name: '鐵堡',
        reward: '獎勵: 迅血 精華',
        job: 'jobs.necromancer',
        lat: -108.45503802435208,
        lng: 98.26241331129356
      },
      {
        name: '滅絕之地',
        reward: '獎勵: 同悲之 精華',
        lat: -93.10496422233814,
        lng: 105.65083934325958
      },
      {
        name: '迦倫堡',
        reward: '獎勵: 兇蠻旋風斬之 精華',
        job: 'jobs.barbarian',
        lat: -40.53909253513524,
        lng: 105.42033392911969
      },
      {
        name: '露斑長眠處',
        reward: '獎勵: 詐欺 精華',
        job: 'jobs.rogue',
        lat: -42.19494668858984,
        lng: 99.15392083431766
      },
      {
        name: '多姆海涅隧道',
        reward: '獎勵: 高效之 精華',
        job: 'jobs.sorcerer',
        lat: -39.86008804221949,
        lng: 95.36751743419744
      },
      {
        name: '水手藏身處',
        reward: '獎勵: 超載 精華',
        job: 'jobs.druid',
        lat: -33.5785010505505,
        lng: 108.45675530007506
      },
      {
        name: '科瓦拉壁壘',
        reward: '獎勵: 爆破陷阱 精華',
        job: 'jobs.rogue',
        lat: -64.73890929293407,
        lng: 126.16505540299279
      },
      {
        name: '奧德林地',
        reward: '獎勵: 復生之 精華',
        job: 'jobs.necromancer',
        lat: -42.38281598967122,
        lng: 107.74786131751446
      },
      {
        name: '賈拉爾守望',
        reward: '獎勵: 刃舞者 精華',
        job: 'jobs.rogue',
        lat: -38.09696838378804,
        lng: 120.45605541355718
      },
      {
        name: '毒蛇巢穴',
        reward: '獎勵: 三重詛咒之 精華',
        job: 'jobs.sorcerer',
        lat: -115.04407429092859,
        lng: 103.76700395059744
      },
      {
        name: '暗影墜落處',
        reward: '獎勵: 分岔散射之 精華',
        job: 'jobs.rogue',
        lat: -122.66505126289616,
        lng: 99.77262729092675
      },
      {
        name: '惡魔烙痕',
        reward: '獎勵: 怪異叛逆之 精華',
        job: 'jobs.rogue',
        lat: -54.97527366209104,
        lng: 83.36706862263819
      },
      {
        name: '破碎壁壘',
        reward: '獎勵: 魂行者 精華',
        lat: -58.412129968215226,
        lng: 81.54918028112084
      },
      {
        name: '腐臭陵墓',
        reward: '獎勵: 雪衛 精華',
        job: 'jobs.sorcerer',
        lat: -94.7981153077622,
        lng: 111.39645040217843
      },
      {
        name: '深埋大廳',
        reward: '獎勵: 捷迅 精華',
        lat: -79.62845731252612,
        lng: 70.68258483305885
      },
      {
        name: '目盲之道',
        reward: '獎勵: 爆裂骸骨之 精華',
        job: 'jobs.necromancer',
        lat: -55.656016321662555,
        lng: 70.549571486489
      },
      {
        name: '獰笑迷宮',
        reward: '獎勵: 靜風之 精華',
        job: 'jobs.druid',
        lat: -69.19786651355055,
        lng: 68.42524584255516
      },
      {
        name: '背叛者行列',
        reward: '獎勵: 強效鮮血之 精華',
        job: 'jobs.necromancer',
        lat: -84.33043379997974,
        lng: 81.7413368517634
      },
      {
        name: '柵欄圍場',
        reward: '獎勵: 墜石 精華',
        job: 'jobs.druid',
        lat: -41.60276214710689,
        lng: 86.81039419706183
      },
      {
        name: '不潔之原',
        reward: '獎勵: 鋼鐵戰士之 精華',
        job: 'jobs.barbarian',
        lat: -68.20970403952332,
        lng: 37.204692443415155
      },
      {
        name: '康鐸神殿',
        reward: '獎勵: 躍動引導之 精華',
        job: 'jobs.sorcerer',
        lat: -77.8206461487253,
        lng: 29.499814818103985
      },
      {
        name: '先祖輓歌',
        reward: '獎勵: 烈爆暗影之 精華',
        job: 'jobs.rogue',
        lat: -79.36602360795769,
        lng: 67.07608522409204
      },
      {
        name: '勇士之歿',
        reward: '獎勵: 晦暗之 精華',
        lat: -88.51791295732747,
        lng: 62.73895473049009
      },
      {
        name: '封印的秘庫',
        reward: '獎勵: 癒傷石之 精華',
        job: 'jobs.druid',
        lat: -83.78783119886371,
        lng: 57.74420931464158
      },
      {
        name: '浴血峭壁',
        reward: '獎勵: 牧人 精華',
        job: 'jobs.druid',
        lat: -78.43433682001685,
        lng: 60.066287750619296
      },
      {
        name: '納骨室',
        reward: '獎勵: 永久踐踏之 精華',
        job: 'jobs.barbarian',
        lat: -85.87180463776834,
        lng: 54.772380120175995
      },
      {
        name: '消散回聲',
        reward: '獎勵: 化形者 精華',
        job: 'jobs.druid',
        lat: -93.77521896107149,
        lng: 79.40064361617716
      },
      {
        name: '血紅禮拜堂',
        reward: '獎勵: 賦能 精華',
        job: 'jobs.rogue',
        lat: -74.25834723886825,
        lng: 131.5211105447874
      },
      {
        name: '不朽放射',
        reward: '獎勵: 割裂 精華',
        job: 'jobs.druid',
        lat: -78.8698506788668,
        lng: 111.26255344170309
      },
      {
        name: '遺忘深淵',
        reward: '獎勵: 刺骨冰寒之 精華',
        job: 'jobs.sorcerer',
        lat: -67.36362932449177,
        lng: 51.91306442967338
      }
    ]
  },
  mysteriousChest: {
    text: 'markers.mysteriousChest',
    icon: {
      url: mysteriousChestIconUrl,
      width: 30,
      height: 30
    },
    coordinates: [
      {
        lat: -125.609375,
        lng: 22.54296875,
        name: 'coordinates.mysteriousChest'
      },
      { lat: -127.7656, lng: 35.2852, name: 'coordinates.mysteriousChest' },
      {
        lat: -106.515625,
        lng: 27.3828125,
        name: 'coordinates.mysteriousChest'
      },
      {
        lat: -96.5078125,
        lng: 27.59765625,
        name: 'coordinates.mysteriousChest'
      },
      { lat: -96.75, lng: 36.8203125, name: 'coordinates.mysteriousChest' },
      { lat: -96.0625, lng: 35.8359375, name: 'coordinates.mysteriousChest' },
      { lat: -91.96875, lng: 26.2890625, name: 'coordinates.mysteriousChest' },
      { lat: -86.875, lng: 46.6953125, name: 'coordinates.mysteriousChest' },
      {
        lat: -91.3046875,
        lng: 64.59765625,
        name: 'coordinates.mysteriousChest'
      },
      { lat: -71.7656, lng: 68.8516, name: 'coordinates.mysteriousChest' },
      { lat: -62.90625, lng: 68.1796875, name: 'coordinates.mysteriousChest' },
      {
        lat: -52.0390625,
        lng: 72.00390625,
        name: 'coordinates.mysteriousChest'
      },
      {
        lat: -44.6484375,
        lng: 59.37109375,
        name: 'coordinates.mysteriousChest'
      },
      { lat: -44.625, lng: 68.85546875, name: 'coordinates.mysteriousChest' },
      { lat: -38.640625, lng: 71.3671875, name: 'coordinates.mysteriousChest' },
      { lat: -32.0312, lng: 75.1328, name: 'coordinates.mysteriousChest' },
      {
        lat: -23.140625,
        lng: 71.58203125,
        name: 'coordinates.mysteriousChest'
      },
      {
        lat: -20.4296875,
        lng: 85.75390625,
        name: 'coordinates.mysteriousChest'
      },
      { lat: -23.4219, lng: 88.22265625, name: 'coordinates.mysteriousChest' },
      {
        lat: -62.5703125,
        lng: 92.74609375,
        name: 'coordinates.mysteriousChest'
      },
      {
        lat: -64.421875,
        lng: 90.62890625,
        name: 'coordinates.mysteriousChest'
      },
      { lat: -72.71875, lng: 107.0859375, name: 'coordinates.mysteriousChest' },
      { lat: -79.2109, lng: 110.6367, name: 'coordinates.mysteriousChest' },
      { lat: -92, lng: 100.2109375, name: 'coordinates.mysteriousChest' },
      { lat: -99.484375, lng: 84.7890625, name: 'coordinates.mysteriousChest' },
      {
        lat: -128.9765625,
        lng: 84.48046875,
        name: 'coordinates.mysteriousChest'
      },
      {
        lat: -117.0859375,
        lng: 92.75390625,
        name: 'coordinates.mysteriousChest'
      }
    ]
  },
  sideQuest: {
    text: 'markers.sideQuest',
    icon: {
      url: sideQuestIconUrl,
      width: 30,
      height: 30
    },
    coordinates: [
      {
        name: 'coordinates.fieldsOfRuin',
        lat: -45.94160910576497,
        lng: 94.5189535469791
      },
      {
        name: '偷天妙手',
        lat: -33.60245239785788,
        lng: 87.82357535486894
      },
      {
        name: '為何心憂',
        lat: -47.292842187684144,
        lng: 87.65403930020636
      },
      {
        name: '初出茅廬的商人',
        lat: -46.26420105289388,
        lng: 86.15849331140396
      },
      {
        name: '劫匪之血',
        lat: -46.8048298037398,
        lng: 89.11480035493017
      },
      {
        name: '鹹水命運',
        lat: -27.68084266664262,
        lng: 70.68553021274377
      },
      {
        name: '浸濕的契約',
        lat: -25.390292539768318,
        lng: 74.32219050968392
      },
      {
        name: '被封印的水手器皿',
        lat: -29.661763445176728,
        lng: 70.3474006249178
      },
      {
        name: '深淵低語',
        lat: -28.002550800217758,
        lng: 77.20718991103882
      },
      {
        name: '深邃陰影',
        lat: -39.87092948847917,
        lng: 73.11482046925167
      },
      {
        name: '老方法',
        lat: -39.87092948847917,
        lng: 73.11482046925167
      },
      {
        name: '橡樹之女',
        lat: -45.60614294120268,
        lng: 89.44091279364177
      },
      {
        name: '殘留於灰燼中',
        lat: -40.11639397281506,
        lng: 67.35047679553689
      },
      {
        name: '所託非人',
        lat: -50.10610911071446,
        lng: 98.86335912840275
      },
      {
        name: '不同的野獸',
        lat: -50.10610911071446,
        lng: 98.86335912840275
      },
      {
        name: '破損的熊',
        lat: -50.10610911071446,
        lng: 98.86335912840275
      },
      {
        name: '永遠忠誠',
        lat: -50.42071727540759,
        lng: 98.53933790926743
      },
      {
        name: '野性之月',
        lat: -51.62806551077173,
        lng: 93.22475371343614
      },
      {
        name: '狼中翹楚',
        lat: -50.23108034721865,
        lng: 98.55886577657827
      },
      {
        name: '自投羅網',
        lat: -54.0213736934986,
        lng: 93.89093969056574
      },
      {
        name: '獠牙畢露',
        lat: -50.23108034721865,
        lng: 98.55886577657827
      },
      {
        name: '布雷加的編年史',
        lat: -51.61062492331051,
        lng: 81.96480280845641
      },
      {
        name: '援助要求',
        lat: -51.61062492331051,
        lng: 81.96480280845641
      },
      {
        name: '灰燼火堆',
        lat: -51.70746142835278,
        lng: 106.43227802745915
      },
      {
        name: '利爪封喉',
        lat: -54.775207733967534,
        lng: 104.91396425369251
      },
      {
        name: '賭上榮譽',
        lat: -51.360328924880626,
        lng: 106.73085116611699
      },
      {
        name: '懷念肥鵝',
        lat: -51.68515986634578,
        lng: 106.40467981981169
      },
      {
        name: '黑林之熊',
        lat: -51.561926796497346,
        lng: 122.12349376077009
      },
      {
        name: '貪婪掠食者的祭品',
        lat: -32.2941431942005,
        lng: 86.93144930211102
      },
      {
        name: '飢腸轆轆的史湛德',
        lat: -35.51682201579253,
        lng: 88.16585792805063
      },
      {
        name: '奉獻傳遞',
        lat: -35.381009333028665,
        lng: 86.86076018967353
      },
      {
        name: '煙霧訊號',
        lat: -39.61559575279275,
        lng: 100.83004805160098
      },
      {
        name: '新生咒',
        lat: -39.61559575279275,
        lng: 100.83004805160098
      },
      {
        name: '瓶中信',
        lat: -35.58419806904219,
        lng: 105.44130503247615
      },
      {
        name: '先知',
        lat: -43.066357392163034,
        lng: 97.90505039412523
      },
      {
        name: '紀錄傳統之道',
        lat: -55.79448044508774,
        lng: 80.30466900286206
      },
      {
        name: '遏止潮汐',
        lat: -26.982040750122238,
        lng: 72.60650684323245
      },
      {
        name: '擺平帳務',
        lat: -48.053864578390474,
        lng: 110.22660449893175
      },
      {
        name: '撫育自然',
        lat: -40.22745987607315,
        lng: 65.47397539829014
      },
      {
        name: '預卜者',
        lat: -41.73789723947953,
        lng: 68.87382716856472
      },
      {
        name: '獲得的滋味',
        lat: -46.51314187054132,
        lng: 109.90090441337604
      },
      {
        name: '害蟲和瘟疫',
        lat: -46.48866023510166,
        lng: 109.15893381695408
      },
      {
        name: '雲遊學者',
        lat: -49.82049003058524,
        lng: 67.21009999975477
      },
      {
        name: '先祖的呼喚',
        lat: -70.07331329901932,
        lng: 116.72364082306106
      },
      {
        name: '破碎貢品',
        lat: -69.77160881221135,
        lng: 117.79455142269214
      },
      {
        name: '血腥展示',
        lat: -73.02472028050511,
        lng: 115.68751515750863
      },
      {
        name: '巨獸挑戰',
        lat: -69.77160881221135,
        lng: 117.79455142269214
      },
      {
        name: '淨化烈焰',
        lat: -88.3569999696363,
        lng: 100.02033372242644
      },
      {
        name: '血濃於水',
        lat: -88.05886019749525,
        lng: 100.14345059325507
      },
      {
        name: '申冤哭喊',
        lat: -74.7872801903525,
        lng: 107.50960955480329
      },
      {
        name: '飢饞的死者',
        lat: -89.39698337836671,
        lng: 113.09136914185142
      },
      {
        name: '冰冷的信仰',
        lat: -82.83558101557165,
        lng: 105.70026281437214
      },
      {
        name: '絕望深淵',
        lat: -77.87918406643719,
        lng: 103.97960145625319
      },
      {
        name: '恐怖的殉道者',
        lat: -71.97825557238033,
        lng: 111.44496080558866
      },
      {
        name: '鮮血信仰',
        lat: -76.92537247920012,
        lng: 102.59715804735076
      },
      {
        name: '原諒我',
        lat: -66.79021109080068,
        lng: 94.53370989920045
      },
      {
        name: '冰封晶球',
        lat: -119.55358564682118,
        lng: 74.64344307191546
      },
      {
        name: '旅人的祈禱',
        lat: -88.90879423171161,
        lng: 114.5048273988358
      },
      {
        name: '錢用在刀口上',
        lat: -68.50083222413774,
        lng: 94.58333954689093
      },
      {
        name: '勇士之鎚',
        lat: -70.955447607045,
        lng: 117.32576479204423
      },
      {
        name: '擁有權傳承',
        lat: -67.58699846998323,
        lng: 93.50536003601611
      },
      {
        name: '未竟傳承',
        lat: -67.58699846998323,
        lng: 93.50536003601611
      },
      {
        name: '靈魂疾病',
        lat: -78.1365800337491,
        lng: 103.14773787184822
      },
      {
        name: '梅內斯德的稅金',
        lat: -76.93085212323354,
        lng: 101.58883676602372
      },
      {
        name: '聖光守望的傳承',
        lat: -87.67116065190467,
        lng: 100.27658175501234
      },
      {
        name: '鮮血佈道',
        lat: -65.48384627696163,
        lng: 124.93759787310954
      },
      {
        name: '封印之門',
        lat: -77.96164387100467,
        lng: 104.09974349360006
      },
      {
        name: '眼見瘋狂',
        lat: -75.09246101047201,
        lng: 101.87742506754975
      },
      {
        name: '更好的日子',
        lat: -87.67116065190467,
        lng: 100.27658175501234
      },
      {
        name: '未定的結局',
        lat: -87.67116065190467,
        lng: 100.27658175501234
      },
      {
        name: '正義木偶',
        lat: -88.70943535443112,
        lng: 114.36147576957194
      },
      {
        name: '飢渴的骸骨寶箱',
        lat: -84.40688367238153,
        lng: 86.59817959076513
      },
      {
        name: '冰霜花',
        lat: -78.02283322937788,
        lng: 101.93067753225264
      },
      {
        name: '驅魂師的寶箱',
        lat: -69.17362056172524,
        lng: 113.72821913731946
      },
      {
        name: '溫泉的奧秘',
        lat: -69.90771609949314,
        lng: 104.72118915331609
      },
      {
        name: '振奮精神',
        lat: -75.89095709585851,
        lng: 103.7290085526623
      },
      {
        name: '不撓之軀',
        lat: -89.63434623845966,
        lng: 114.47502015642465
      },
      {
        name: '涅維斯克樵夫',
        lat: -88.20289234630924,
        lng: 90.51880394312603
      },
      {
        name: '感性的價值',
        lat: -74.71666348740565,
        lng: 72.27912789125634
      },
      {
        name: '血與汗',
        lat: -89.87371240927449,
        lng: 73.9870357553397
      },
      {
        name: '封住的公牛部族寶箱',
        lat: -63.2220495510369,
        lng: 66.71998882018819
      },
      {
        name: '駁斥聖母',
        lat: -60.62048543458818,
        lng: 61.48472369927114
      },
      {
        name: '挖掘信仰',
        lat: -69.30772453828514,
        lng: 52.344621461104225
      },
      {
        name: '不幸之人',
        lat: -78.13487132754513,
        lng: 35.00702684532742
      },
      {
        name: '惡意奉獻',
        lat: -57.34339315853524,
        lng: 52.05188017422249
      },
      {
        name: '清除血肉',
        lat: -76.2033262662154,
        lng: 55.32555187879615
      },
      {
        name: '燒焦的債務',
        lat: -69.18838024807333,
        lng: 54.56046005184777
      },
      {
        name: '追獵聖物獵手',
        lat: -72.78096450237318,
        lng: 79.9631816821953
      },
      {
        name: '眼見不為憑',
        lat: -87.83504914522689,
        lng: 75.87879421935422
      },
      {
        name: '廢物或寶物',
        lat: -65.54099955343926,
        lng: 72.9734422443767
      },
      {
        name: '神兵坩堝',
        lat: -59.22217455070444,
        lng: 53.55205040913019
      },
      {
        name: '渴求新生',
        lat: -52.13015999067294,
        lng: 66.62158368491586
      },
      {
        name: '塵土菊',
        lat: -57.71182556865344,
        lng: 54.99943944008456
      },
      {
        name: '熾烈之心',
        lat: -91.0792046361757,
        lng: 54.54962105460736
      },
      {
        name: '竊賊的飢荒',
        lat: -57.7183657889514,
        lng: 52.99534419488813
      },
      {
        name: '無惡不懲',
        lat: -60.31224072748225,
        lng: 59.625040420025144
      },
      {
        name: '親友',
        lat: -68.64828178535969,
        lng: 59.6052180147458
      },
      {
        name: '一磅肉塊',
        lat: -67.52787134323549,
        lng: 57.967439640959796
      },
      {
        name: '月亮的相位',
        lat: -87.66093787513265,
        lng: 72.31570950694275
      },
      {
        name: '驕兵之敗',
        lat: -75.7012023258624,
        lng: 56.38394461476642
      },
      {
        name: '氣節不保',
        lat: -57.40417007058337,
        lng: 53.96605297763905
      },
      {
        name: '黯淡護身符',
        lat: -92.81881485407666,
        lng: 53.48748768643729
      },
      {
        name: '來自遠方的貨幣',
        lat: -92.90893437611021,
        lng: 53.44103904880649
      },
      {
        name: '鹽生鹽',
        lat: -93.51352176779787,
        lng: 54.33678791857683
      },
      {
        name: '保存古老傳統',
        lat: -84.05041220569112,
        lng: 63.111780891004145
      },
      {
        name: '受亞瑞特認可',
        lat: -75.8889832455884,
        lng: 56.48120105196166
      },
      {
        name: '奇珍逸品',
        lat: -65.80313865348977,
        lng: 72.73362943043253
      },
      {
        name: '以愛之名',
        lat: -65.54099955343926,
        lng: 72.9734422443767
      },
      {
        name: '罪孽重擔',
        lat: -72.00447537447573,
        lng: 77.78133277301545
      },
      {
        name: '第一手消息',
        lat: -71.8506623556666,
        lng: 45.99017096752068
      },
      {
        name: '僅剩之物',
        lat: -75.48348958711513,
        lng: 72.92160356192254
      },
      {
        name: '鐵狼武器',
        lat: -101.7452728263295,
        lng: 38.4278791727553
      },
      {
        name: '再次服侍',
        lat: -101.7452728263295,
        lng: 38.4278791727553
      },
      {
        name: '一片狼藉',
        lat: -109.83325688011327,
        lng: 37.324215951028194
      },
      {
        name: '絕望時刻',
        lat: -101.4974220453984,
        lng: 38.50018824401947
      },
      {
        name: 'sideQuests.pinchOfPoison',
        lat: -118.72268306446281,
        lng: 24.05525101677827
      },
      {
        name: 'sideQuests.deadlyTrade',
        lat: -118.94852688790485,
        lng: 24.599380459765825
      },
      {
        name: 'sideQuests.endlessFortune',
        lat: -118.45921824408163,
        lng: 23.8617101176838
      },
      {
        name: 'sideQuests.unsafeTravels',
        lat: -97.70630380646824,
        lng: 36.09425484841279
      },
      {
        name: 'sideQuests.roadToRuin',
        lat: -98.25815698944714,
        lng: 49.726709089575635
      },
      {
        name: 'sideQuests.theOnlyCure',
        lat: -100.53306361641958,
        lng: 50.1817997046888
      },
      {
        name: 'sideQuests.mirage',
        lat: -92.82255633145434,
        lng: 45.26030588160364
      },
      {
        name: 'sideQuests.desiccation',
        lat: -93.87567910168423,
        lng: 32.68550803148982
      },
      {
        name: 'sideQuests.thePilgrimsFootsteps',
        lat: -92.44569823212345,
        lng: 28.259751063169375
      },
      {
        name: 'sideQuests.symbolOfFaith',
        lat: -87.58330958465916,
        lng: 30.502480970436025
      },
      {
        name: 'sideQuests.finalStraw',
        lat: -116.48088998530525,
        lng: 26.9013419524957
      },
      {
        name: 'sideQuests.aVoiceFromThePast',
        lat: -115.3579164838751,
        lng: 28.735017529124065
      },
      {
        name: 'sideQuests.izelOfTheVizjerei',
        lat: -115.41663116429774,
        lng: 28.741762448602486
      },
      {
        name: 'sideQuests.theSpeakingStone',
        lat: -124.10772958717953,
        lng: 23.751199471906546
      },
      {
        name: 'sideQuests.sealedKhazraOffering',
        lat: -117.11938635700618,
        lng: 29.79821123398071
      },
      {
        name: 'sideQuests.spottedMushroom',
        lat: -78.02283322937788,
        lng: 101.93067753225264
      },
      {
        name: 'sideQuests.whentheTideComesIn',
        lat: -126.52495965676198,
        lng: 24.496910700528304
      },
      {
        name: 'sideQuests.zakarumsPlight',
        lat: -124.17307286925552,
        lng: 34.4170672944429
      },
      {
        name: 'sideQuests.aWolfsHonor',
        lat: -101.97282535597552,
        lng: 32.91984243922009
      },
      {
        name: 'sideQuests.strangeRemedies',
        lat: -100.99438483103982,
        lng: 29.853466556869364
      },
      {
        name: 'sideQuests.guardiansOfThePit',
        lat: -101.88744896668057,
        lng: 33.55716369543774
      },
      {
        name: 'sideQuests.seekingRefuge',
        lat: -111.46760490375928,
        lng: 22.167056462182472
      },
      {
        name: 'sideQuests.moreValueThanGold',
        lat: -103.9956978178623,
        lng: 31.08805190559005
      },
      {
        name: 'sideQuests.headOfTheSnake',
        lat: -103.37181383025049,
        lng: 33.48980286204417
      },
      {
        name: 'sideQuests.anErrantFlock',
        lat: -111.93561364093647,
        lng: 41.9487565942822
      },
      {
        name: 'sideQuests.actsOfAtonement',
        lat: -120.7502986590882,
        lng: 25.13381960359007
      },
      {
        name: 'sideQuests.justiceDelayed',
        lat: -119.89114350346074,
        lng: 23.63500424333742
      },
      {
        name: 'sideQuests.anUnlawfulOrder',
        lat: -114.61775209303795,
        lng: 45.39673586860799
      },
      {
        name: 'sideQuests.shadowOfAlcarnus',
        lat: -105.29681867128225,
        lng: 53.60438980613077
      },
      {
        name: 'sideQuests.strayedFromThePath',
        lat: -108.62749950914593,
        lng: 61.735758409814764
      },
      {
        name: 'sideQuests.ravenousNecrolytesCache',
        lat: -94.93213090296672,
        lng: 77.40426526575516
      },
      {
        name: 'sideQuests.paymentPastDue',
        lat: -108.96446815674963,
        lng: 62.53006840323734
      },
      {
        name: 'sideQuests.tracesOfIron',
        lat: -107.20137795876997,
        lng: 61.47574029123224
      },
      {
        name: 'sideQuests.theWayOfTheThree',
        lat: -100.78995875605099,
        lng: 42.97710645746653
      },
      {
        name: 'sideQuests.butchersOfTheNorth',
        lat: -87.38162333168705,
        lng: 31.524174275532488
      },
      {
        name: 'sideQuests.heartsBurden',
        lat: -100.94925141889357,
        lng: 115.95333567407042
      },
      {
        name: 'sideQuests.tangledMemories',
        lat: -96.504936042818,
        lng: 111.18426524967859
      },
      {
        name: 'sideQuests.growingReminders',
        lat: -95.9161394532912,
        lng: 110.45716882066534
      },
      {
        name: 'sideQuests.unearthedRegrets',
        lat: -95.9161394532912,
        lng: 110.45716882066534
      },
      {
        name: 'sideQuests.badBlood',
        lat: -128.59052031329622,
        lng: 107.66008900290458
      },
      {
        name: 'sideQuests.broughtToHeel',
        lat: -123.63194329072911,
        lng: 122.02567770143472
      },
      {
        name: 'sideQuests.byThreeTheyCome',
        lat: -127.56738828299117,
        lng: 90.17605010919476
      },
      {
        name: 'sideQuests.deadInTheWater',
        lat: -124.74982013399915,
        lng: 122.78249301146853
      },
      {
        name: 'sideQuests.aDebtRepaid',
        lat: -125.62753537425596,
        lng: 121.23048409410669
      },
      {
        name: 'sideQuests.drinkToThePast',
        lat: -124.93978112715783,
        lng: 122.05003599142879
      },
      {
        name: 'sideQuests.goodRiddance',
        lat: -124.93978112715783,
        lng: 122.05003599142879
      },
      {
        name: 'sideQuests.oversteppingTheMark',
        lat: -119.59924934709969,
        lng: 74.83318443121641
      },
      {
        name: 'sideQuests.discretionarySpending',
        lat: -124.93978112715783,
        lng: 122.05003599142879
      },
      {
        name: 'sideQuests.baitTheTrap',
        lat: -124.93978112715783,
        lng: 122.05003599142879
      },
      {
        name: 'sideQuests.deadToRights',
        lat: -123.0233492775977,
        lng: 112.31588012461535
      },
      {
        name: 'sideQuests.necroticResearch',
        lat: -128.59052031329622,
        lng: 107.66008900290458
      },
      {
        name: 'sideQuests.poisonedHearts',
        lat: -120.25115022436626,
        lng: 87.98813371786405
      },
      {
        name: 'sideQuests.theGreaterGood',
        lat: -124.98930414662115,
        lng: 121.6205701795742
      },
      {
        name: 'sideQuests.turbulentWaters',
        lat: -124.8279787126049,
        lng: 120.81754186228437
      },
      {
        name: 'sideQuests.glitteringAbundance',
        lat: -119.55358564682118,
        lng: 74.64344307191546
      },
      {
        name: 'sideQuests.IreOfTheWitch',
        lat: -110.31110540818918,
        lng: 112.79108768297635
      },
      {
        name: 'sideQuests.perceivedThreat',
        lat: -109.93633900093556,
        lng: 113.1026793998414
      },
      {
        name: 'sideQuests.songOfRot',
        lat: -109.93633900093556,
        lng: 113.1026793998414
      },
      {
        name: 'sideQuests.closingTheBook',
        lat: -100.71674953334642,
        lng: 92.60472183596883
      },
      {
        name: 'sideQuests.oneLittleRedSprig',
        lat: -122.33639046269795,
        lng: 110.3989681180918
      },
      {
        name: 'sideQuests.timewornEffigy',
        lat: -122.33639046269795,
        lng: 110.3989681180918
      },
      {
        name: 'sideQuests.venomOfTheNangari',
        lat: -122.33639046269795,
        lng: 110.3989681180918
      },
      {
        name: 'sideQuests.theSwampsProtection',
        lat: -123.2587972083241,
        lng: 109.84788757904792
      },
      {
        name: 'sideQuests.fleshAndBlood',
        lat: -116.76603769820579,
        lng: 91.20996673998356
      },
      {
        name: 'sideQuests.travelersSuperstition',
        lat: -109.85605926980074,
        lng: 125.28697881133182
      },
      {
        name: 'sideQuests.giftOfTheSwamp',
        lat: -107.79435793245133,
        lng: 92.42820523145306
      },
      {
        name: 'sideQuests.fungalRemedies',
        lat: -100.79019443966536,
        lng: 90.16055741205223
      },
      {
        name: 'sideQuests.heartOfMold',
        lat: -99.08967824129316,
        lng: 92.56263236027169
      },
      {
        name: 'sideQuests.chainedZakarumRepository',
        lat: -98.6307727837199,
        lng: 105.20923856710324
      },
      {
        name: 'sideQuests.desperateRemedies',
        lat: -99.72985385874625,
        lng: 93.66202478145568
      },
      {
        name: 'sideQuests.aQuestionOfSelf',
        lat: -101.6000622594438,
        lng: 95.93968689178519
      },
      {
        name: 'sideQuests.pastRegrets',
        lat: -101.53333433613358,
        lng: 96.08869365004402
      },
      {
        name: 'sideQuests.whatCantBeCured',
        lat: -93.30659155440668,
        lng: 96.84309374873624
      },
      {
        name: 'sideQuests.leftBehind',
        lat: -124.24333604678085,
        lng: 96.46352266874379
      },
      {
        name: 'sideQuests.lostCause',
        lat: -123.0193426561539,
        lng: 97.17480240884916
      },
      {
        name: 'sideQuests.atAnyCost',
        lat: -116.10491569952815,
        lng: 93.60123214475945
      },
      {
        name: 'sideQuests.remnantsOfFaith',
        lat: -117.9973667413291,
        lng: 73.44072673138533
      },
      {
        name: 'sideQuests.lostLegacy',
        lat: -110.43439739894117,
        lng: 95.69354151151848
      },
      {
        name: 'sideQuests.aPriceToPay',
        lat: -117.48260426715709,
        lng: 74.01781497304685
      },
      {
        name: 'sideQuests.coiledGrasp',
        lat: -119.83089687954487,
        lng: 73.05809245652058
      },
      {
        name: 'sideQuests.toWalkADarkPath',
        lat: -119.88050828036361,
        lng: 74.3091719314767
      },
      {
        name: 'sideQuests.toWalkADarkPath',
        lat: -117.48021797056188,
        lng: 74.92425557107336
      }
    ]
  },
  stronghold: {
    text: 'markers.stronghold',
    icon: {
      url: strongholdIconUrl,
      width: 30,
      height: 30
    },
    coordinates: [
      {
        name: 'coordinates.turDulra',
        lat: -41.22970444605725,
        lng: 65.280758490961
      },
      {
        name: 'coordinates.hopesLight',
        lat: -18.1391915400568,
        lng: 79.2182951598853
      },
      {
        name: 'coordinates.moordaineLodge',
        lat: -39.19009844755228,
        lng: 112.65153559350603
      },
      {
        name: 'coordinates.korDragan',
        lat: -62.37859681621491,
        lng: 99.38748944332986
      },
      {
        name: 'coordinates.malnok',
        lat: -77.2421607173259,
        lng: 115.77634780880507
      },
      {
        name: 'coordinates.nostrava',
        lat: -80.353891477467,
        lng: 88.99766260486187
      },
      {
        name: 'coordinates.theOnyxWatchtower',
        lat: -70.29444345017453,
        lng: 58.315760242495514
      },
      {
        name: 'coordinates.theRuinsOfQaraYisu',
        lat: -88.71656478376494,
        lng: 71.27799333636045
      },
      {
        name: 'coordinates.templeOfRot',
        lat: -84.06225530731174,
        lng: 51.974357780916066
      },
      {
        name: 'coordinates.alcarnus',
        lat: -100.10026011913456,
        lng: 52.22397870921091
      },
      {
        name: 'coordinates.altarOfRuin',
        lat: -91.30867209518823,
        lng: 36.52251305459656
      },
      {
        name: 'coordinates.omathsRedoubt',
        lat: -122.18422722918919,
        lng: 40.27109777956274
      },
      {
        name: 'coordinates.erimansPyre',
        lat: -95.06679462811067,
        lng: 106.90062285115434
      },
      {
        name: 'coordinates.crusadersMonument',
        lat: -106.45747209055514,
        lng: 76.16402478803947
      },
      {
        name: 'coordinates.vyeresz',
        lat: -125.04483709825021,
        lng: 97.73622123058703
      }
    ]
  }
}
