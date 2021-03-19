<template>
  <v-form ref="form" v-model="valid">
    <div class="night">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
    <v-container>
      <v-row justify="center" class="mt-12">
        <v-img
          class="ml-5"
          max-width="50vw"
          contain
          src="../../public/assets/images/starchild.png"
        ></v-img>
      </v-row>
    </v-container>
    <Card class="login-card">
      <v-container>
        <v-row align="center" justify="center">
          <Input
            label="Email"
            :rules="rules.email"
            type="text"
            v-model="email"
            required
          />
        </v-row>
        <v-row align="center" justify="center">
          <Input
            label="Password"
            type="password"
            :rules="rules.password"
            v-model="password"
            required
          />
        </v-row>
        <v-row align="center" justify="center">
          <Button
            text="Login"
            class="mt-10"
            :disabled="!valid"
            @click.native="validate"
          />
        </v-row>
      </v-container>
    </Card>
    <v-container>
      <v-row justify="center" class="mt-3">
        <router-link
          style="text-decoration: none; color: inhrit;"
          type="button"
          class="btn"
          :to="{
            name: 'signup'
          }"
        >
          <Button text="Registro" />
        </router-link>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Input from '../components/Input.vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import LoginService from '../services/loginSignupService.js'

export default {
  name: 'login',
  components: {
    Input,
    Card,
    Button
  },
  data: () => {
    return {
      email: '',
      password: '',
      valid: true,
      rules: {
        email: [
          value =>
            (value &&
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                value
              )) ||
            'Dirección de email inválida.'
        ],
        password: [
          value => !!value || 'Requerido.',
          value =>
            (value &&
              /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,}/.test(
                value
              )) ||
            'Mínimo 3 caracteres, una letra minúscula, una mayúscula y un número.'
        ]
      }
    }
  },
  methods: {
    validate() {
      this.valid = this.$refs.form.validate()

      if (this.valid) {
        LoginService.login({
          email: this.email,
          password: this.password
        })
          .then(logged => {
            if (logged) this.$router.push('home')
            else {
              //TODO -> do something to show error to user
            }
          })
          .catch(err => {
            console.log(err)
            //TODO -> do something to show error to user
          })
      }
    }
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.$router.push('home')
    }
  }
}
</script>

<style scoped>
.font-hind {
  font-family: Hind;
}
.login-card {
  margin: 6vw 12vw 2vw 12vw !important;
  /* height: 36vh !important; */
}
.empty-row {
  height: 20vh;
}

.night {
  position: relative;
  width: 100%;
  height: 100%;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 316px 1525px #fff, 1298px 761px #fff, 497px 18px #fff,
    724px 520px #fff, 829px 790px #fff, 1833px 1933px #fff, 643px 1810px #fff,
    1006px 216px #fff, 330px 481px #fff, 1103px 297px #fff, 1618px 1466px #fff,
    1087px 991px #fff, 805px 498px #fff, 1053px 841px #fff, 1178px 470px #fff,
    1230px 1945px #fff, 1726px 1517px #fff, 1445px 626px #fff, 673px 245px #fff,
    38px 515px #fff, 1775px 184px #fff, 1358px 1185px #fff, 1676px 1921px #fff,
    1920px 1851px #fff, 1773px 786px #fff, 406px 252px #fff, 1412px 1801px #fff,
    883px 1708px #fff, 166px 1749px #fff, 1209px 1650px #fff, 1423px 1359px #fff,
    974px 1414px #fff, 552px 587px #fff, 1231px 912px #fff, 1161px 1524px #fff,
    672px 162px #fff, 311px 211px #fff, 1599px 1986px #fff, 1091px 687px #fff,
    514px 751px #fff, 873px 598px #fff, 350px 632px #fff, 248px 1148px #fff,
    1707px 740px #fff, 1884px 1444px #fff, 1694px 1170px #fff, 318px 1666px #fff,
    1021px 1621px #fff, 334px 439px #fff, 1401px 1680px #fff, 4px 1429px #fff,
    685px 23px #fff, 1226px 1116px #fff, 98px 208px #fff, 1547px 193px #fff,
    319px 832px #fff, 1919px 1579px #fff, 1930px 334px #fff, 808px 1527px #fff,
    1847px 1863px #fff, 1441px 1317px #fff, 972px 905px #fff, 247px 1095px #fff,
    435px 609px #fff, 114px 1715px #fff, 855px 1563px #fff, 1411px 840px #fff,
    547px 1244px #fff, 1841px 1216px #fff, 872px 1469px #fff, 826px 720px #fff,
    509px 1281px #fff, 801px 122px #fff, 1384px 1967px #fff, 869px 732px #fff,
    1825px 1940px #fff, 395px 734px #fff, 180px 1199px #fff, 1146px 1917px #fff,
    707px 1662px #fff, 1793px 241px #fff, 200px 1101px #fff, 147px 599px #fff,
    1832px 1862px #fff, 648px 1127px #fff, 1544px 935px #fff, 275px 838px #fff,
    480px 536px #fff, 1581px 958px #fff, 1889px 892px #fff, 724px 17px #fff,
    502px 788px #fff, 248px 791px #fff, 1333px 156px #fff, 1215px 978px #fff,
    1179px 1732px #fff, 874px 450px #fff, 1288px 238px #fff, 1854px 376px #fff,
    1128px 1603px #fff, 1936px 1667px #fff, 829px 412px #fff, 1624px 64px #fff,
    1979px 1404px #fff, 144px 458px #fff, 1935px 774px #fff, 1021px 1290px #fff,
    1554px 1094px #fff, 218px 1209px #fff, 986px 1126px #fff, 17px 391px #fff,
    589px 21px #fff, 341px 731px #fff, 1733px 1715px #fff, 331px 1877px #fff,
    1628px 50px #fff, 1855px 1233px #fff, 112px 1746px #fff, 1229px 678px #fff,
    1741px 373px #fff, 114px 1795px #fff, 1335px 627px #fff, 221px 1428px #fff,
    1431px 940px #fff, 1330px 1349px #fff, 1655px 343px #fff, 87px 1823px #fff,
    252px 1975px #fff, 1005px 206px #fff, 1831px 378px #fff, 867px 1416px #fff,
    1837px 760px #fff, 551px 1829px #fff, 1895px 975px #fff, 642px 1453px #fff,
    204px 367px #fff, 1657px 1939px #fff, 80px 108px #fff, 1757px 1741px #fff,
    939px 1333px #fff, 25px 292px #fff, 1482px 463px #fff, 1621px 1380px #fff,
    1036px 668px #fff, 591px 1089px #fff, 1483px 1693px #fff, 1984px 1789px #fff,
    429px 773px #fff, 486px 636px #fff, 636px 1875px #fff, 55px 1132px #fff,
    1041px 1543px #fff, 583px 1489px #fff, 1630px 13px #fff, 1322px 32px #fff,
    990px 1954px #fff, 667px 1930px #fff, 221px 1032px #fff, 1655px 491px #fff,
    1261px 1364px #fff, 1579px 1963px #fff, 782px 651px #fff, 779px 1955px #fff,
    910px 661px #fff, 1482px 1756px #fff, 1657px 1387px #fff, 1135px 652px #fff,
    118px 1868px #fff, 597px 935px #fff, 1753px 583px #fff, 1763px 1272px #fff,
    1413px 1525px #fff, 1762px 1604px #fff, 235px 1369px #fff, 990px 744px #fff,
    1497px 1278px #fff, 1445px 1890px #fff, 1496px 1812px #fff,
    1558px 1146px #fff, 1824px 1508px #fff, 1746px 681px #fff, 733px 1923px #fff,
    1028px 1667px #fff, 926px 1967px #fff, 1713px 902px #fff, 1374px 838px #fff,
    381px 1427px #fff, 1028px 955px #fff, 1449px 732px #fff, 1932px 556px #fff,
    226px 430px #fff, 173px 1820px #fff, 284px 1293px #fff, 1436px 1768px #fff,
    800px 930px #fff, 1278px 215px #fff, 1274px 542px #fff, 1880px 14px #fff,
    1124px 564px #fff, 907px 1053px #fff, 290px 1920px #fff, 93px 96px #fff,
    280px 1323px #fff, 608px 1228px #fff, 1934px 544px #fff, 1807px 1582px #fff,
    92px 1022px #fff, 1070px 1856px #fff, 594px 237px #fff, 1px 1446px #fff,
    651px 524px #fff, 664px 1442px #fff, 709px 1297px #fff, 1090px 608px #fff,
    462px 735px #fff, 1890px 413px #fff, 1636px 1769px #fff, 692px 1220px #fff,
    1824px 883px #fff, 377px 1971px #fff, 12px 298px #fff, 100px 721px #fff,
    169px 1758px #fff, 1582px 1355px #fff, 1227px 312px #fff, 1370px 1657px #fff,
    905px 1718px #fff, 1849px 489px #fff, 1104px 1963px #fff, 1694px 465px #fff,
    1527px 490px #fff, 1277px 1546px #fff, 519px 531px #fff, 104px 1337px #fff,
    329px 684px #fff, 1058px 84px #fff, 136px 774px #fff, 332px 395px #fff,
    694px 1476px #fff, 1830px 196px #fff, 1180px 343px #fff, 1817px 1531px #fff,
    534px 900px #fff, 1335px 1993px #fff, 1140px 142px #fff, 1966px 9px #fff,
    1990px 1639px #fff, 1842px 71px #fff, 960px 1025px #fff, 810px 1659px #fff,
    474px 520px #fff, 1649px 1201px #fff, 1017px 873px #fff, 1426px 1555px #fff,
    469px 485px #fff, 986px 786px #fff, 579px 1047px #fff, 1631px 1143px #fff,
    1004px 1507px #fff, 1705px 49px #fff, 1767px 344px #fff, 1796px 1299px #fff,
    37px 1588px #fff, 1699px 868px #fff, 6px 94px #fff, 818px 496px #fff,
    544px 1428px #fff, 652px 671px #fff, 884px 994px #fff, 1988px 915px #fff,
    1882px 1382px #fff, 68px 102px #fff, 662px 1350px #fff, 488px 72px #fff,
    1353px 126px #fff, 74px 1790px #fff, 361px 1123px #fff, 312px 1514px #fff,
    1860px 267px #fff, 1183px 121px #fff, 1540px 1398px #fff, 168px 1024px #fff,
    1795px 1559px #fff, 923px 367px #fff, 1270px 451px #fff, 1797px 580px #fff,
    1746px 731px #fff, 488px 911px #fff, 1577px 1345px #fff, 285px 1883px #fff,
    697px 693px #fff, 299px 115px #fff, 220px 211px #fff, 512px 357px #fff,
    644px 1740px #fff, 888px 817px #fff, 838px 549px #fff, 714px 221px #fff,
    844px 1467px #fff, 782px 484px #fff, 84px 521px #fff, 1027px 1168px #fff,
    563px 1986px #fff, 717px 484px #fff, 52px 888px #fff, 824px 1445px #fff,
    1161px 1329px #fff, 1176px 95px #fff, 285px 1817px #fff, 1047px 354px #fff,
    388px 1067px #fff, 502px 1589px #fff, 1648px 1714px #fff, 605px 1359px #fff,
    1313px 820px #fff, 437px 908px #fff, 979px 1105px #fff, 1009px 753px #fff,
    1938px 1230px #fff, 1127px 1945px #fff, 1786px 1162px #fff, 1247px 13px #fff,
    1524px 1732px #fff, 1843px 939px #fff, 793px 630px #fff, 1135px 1682px #fff,
    1403px 1081px #fff, 95px 77px #fff, 664px 219px #fff, 1169px 721px #fff,
    1967px 1344px #fff, 883px 1843px #fff, 1632px 1815px #fff, 73px 759px #fff,
    658px 602px #fff, 576px 894px #fff, 653px 1541px #fff, 1299px 1294px #fff,
    393px 77px #fff, 1084px 1893px #fff, 1276px 1863px #fff, 1401px 68px #fff,
    1774px 797px #fff, 595px 595px #fff, 173px 1938px #fff, 1240px 1275px #fff,
    1717px 1289px #fff, 1412px 628px #fff, 981px 830px #fff, 1784px 1913px #fff,
    1480px 1179px #fff, 1984px 1711px #fff, 1547px 768px #fff, 259px 973px #fff,
    1531px 117px #fff, 1379px 1822px #fff, 1821px 186px #fff, 1247px 741px #fff,
    1354px 342px #fff, 1542px 1071px #fff, 1722px 727px #fff, 919px 1767px #fff,
    693px 576px #fff, 1125px 1714px #fff, 772px 987px #fff, 140px 1843px #fff,
    1741px 119px #fff, 869px 1792px #fff, 1379px 1075px #fff, 200px 438px #fff,
    311px 1189px #fff, 338px 1262px #fff, 1669px 1689px #fff, 1245px 298px #fff,
    590px 1573px #fff, 1598px 657px #fff, 1808px 1125px #fff, 369px 1975px #fff,
    1175px 1291px #fff, 1440px 517px #fff, 1906px 1435px #fff, 827px 780px #fff,
    581px 1950px #fff, 1163px 317px #fff, 340px 1821px #fff, 735px 1790px #fff,
    1344px 1531px #fff, 1290px 141px #fff, 1095px 1682px #fff, 160px 977px #fff,
    1682px 1173px #fff, 180px 546px #fff, 807px 380px #fff, 1394px 1536px #fff,
    1205px 364px #fff, 1776px 207px #fff, 489px 549px #fff, 769px 175px #fff,
    1602px 1990px #fff, 1661px 64px #fff, 439px 484px #fff, 1026px 420px #fff,
    1136px 264px #fff, 487px 774px #fff, 1594px 624px #fff, 1154px 69px #fff,
    596px 249px #fff, 818px 813px #fff, 1568px 145px #fff, 990px 780px #fff,
    1424px 547px #fff, 674px 993px #fff, 1657px 205px #fff, 1211px 1298px #fff,
    1630px 1961px #fff, 738px 1394px #fff, 101px 1874px #fff, 1487px 1934px #fff,
    1749px 933px #fff, 1065px 460px #fff, 282px 1091px #fff, 392px 764px #fff,
    1255px 363px #fff, 1875px 772px #fff, 560px 1471px #fff, 604px 365px #fff,
    1294px 960px #fff, 887px 1219px #fff, 81px 1547px #fff, 1858px 281px #fff,
    1084px 1913px #fff, 1840px 91px #fff, 1774px 1761px #fff, 966px 618px #fff,
    787px 1679px #fff, 487px 232px #fff, 1068px 936px #fff, 572px 964px #fff,
    1783px 1385px #fff, 1835px 424px #fff, 461px 524px #fff, 1000px 27px #fff,
    1087px 1973px #fff, 601px 402px #fff, 1661px 1523px #fff, 581px 1834px #fff,
    1589px 148px #fff, 704px 61px #fff, 1549px 783px #fff, 346px 1252px #fff,
    564px 1195px #fff, 1914px 37px #fff, 554px 1487px #fff, 359px 1678px #fff,
    1129px 1442px #fff, 1080px 348px #fff, 739px 1435px #fff, 374px 562px #fff,
    1139px 258px #fff, 1784px 1089px #fff, 2000px 607px #fff, 1362px 638px #fff,
    1076px 1569px #fff, 356px 1871px #fff, 1851px 187px #fff, 408px 178px #fff,
    762px 1354px #fff, 149px 1574px #fff, 570px 833px #fff, 1682px 923px #fff,
    805px 1199px #fff, 293px 1691px #fff, 376px 1648px #fff, 460px 122px #fff,
    1417px 1564px #fff, 927px 686px #fff, 631px 1993px #fff, 1302px 1149px #fff,
    176px 338px #fff, 1192px 1763px #fff, 1942px 1173px #fff, 78px 1415px #fff,
    26px 1649px #fff, 1372px 1156px #fff, 1171px 1263px #fff, 260px 215px #fff,
    207px 699px #fff, 963px 91px #fff, 928px 1492px #fff, 912px 1335px #fff,
    1967px 1173px #fff, 633px 202px #fff, 1182px 358px #fff, 868px 772px #fff,
    1358px 824px #fff, 1274px 148px #fff, 1708px 761px #fff, 797px 1329px #fff,
    678px 1016px #fff, 367px 116px #fff, 615px 1276px #fff, 1178px 361px #fff,
    1877px 570px #fff, 1390px 1063px #fff, 1934px 1310px #fff, 54px 1907px #fff,
    190px 1998px #fff, 1787px 229px #fff, 1705px 140px #fff, 470px 370px #fff,
    223px 1599px #fff, 211px 1320px #fff, 761px 131px #fff, 1466px 1241px #fff,
    98px 1981px #fff, 914px 1141px #fff, 1067px 1863px #fff, 170px 905px #fff,
    315px 1989px #fff, 194px 1034px #fff, 201px 908px #fff, 1947px 923px #fff,
    251px 1187px #fff, 771px 557px #fff, 1478px 1962px #fff, 1381px 1518px #fff,
    1781px 702px #fff, 1719px 1484px #fff, 609px 1340px #fff, 1457px 1661px #fff,
    1430px 1957px #fff, 1692px 395px #fff, 1348px 1093px #fff, 3px 1885px #fff,
    856px 1656px #fff, 521px 29px #fff, 212px 928px #fff, 1278px 460px #fff,
    1832px 1452px #fff, 985px 402px #fff, 1191px 975px #fff, 707px 1400px #fff,
    777px 1245px #fff, 1200px 1178px #fff, 1847px 1670px #fff, 92px 15px #fff,
    1842px 1076px #fff, 213px 1523px #fff, 916px 1018px #fff, 735px 1862px #fff,
    318px 1868px #fff, 1852px 717px #fff, 158px 1695px #fff, 990px 1842px #fff,
    190px 1179px #fff, 1872px 1569px #fff, 654px 338px #fff, 574px 24px #fff,
    1779px 298px #fff, 1782px 154px #fff, 367px 914px #fff, 70px 1021px #fff,
    649px 1536px #fff, 963px 226px #fff, 693px 1836px #fff, 1048px 682px #fff,
    1304px 1290px #fff, 1223px 481px #fff, 1432px 321px #fff, 1342px 754px #fff,
    1422px 1199px #fff, 517px 1763px #fff, 1529px 1108px #fff, 1679px 45px #fff,
    382px 1757px #fff, 165px 380px #fff, 443px 1624px #fff, 1851px 451px #fff,
    1075px 1547px #fff, 1591px 699px #fff, 1909px 551px #fff, 1608px 191px #fff,
    1885px 1201px #fff, 1660px 1565px #fff, 1997px 1637px #fff,
    1580px 545px #fff, 875px 676px #fff, 1943px 548px #fff, 1488px 987px #fff,
    91px 1450px #fff, 522px 1476px #fff, 207px 1729px #fff, 1809px 624px #fff,
    64px 38px #fff, 274px 1384px #fff, 1403px 1465px #fff, 73px 160px #fff,
    958px 440px #fff, 1990px 540px #fff, 907px 1833px #fff, 952px 684px #fff,
    593px 281px #fff, 274px 733px #fff, 252px 503px #fff, 359px 1531px #fff,
    1283px 1180px #fff, 1056px 1356px #fff, 360px 938px #fff, 561px 984px #fff,
    337px 87px #fff, 1154px 1025px #fff, 1742px 734px #fff, 660px 928px #fff,
    1322px 719px #fff, 469px 781px #fff, 51px 769px #fff, 425px 90px #fff,
    927px 1234px #fff, 1128px 267px #fff, 1349px 361px #fff, 316px 1097px #fff,
    1673px 1834px #fff, 1524px 1201px #fff, 1328px 183px #fff, 1126px 265px #fff,
    1659px 1939px #fff, 1502px 1837px #fff, 1415px 1961px #fff,
    1873px 136px #fff, 1853px 1150px #fff, 927px 1166px #fff, 1824px 1102px #fff,
    553px 600px #fff, 188px 675px #fff, 338px 99px #fff, 1417px 1101px #fff,
    1716px 1340px #fff, 1029px 1492px #fff, 194px 837px #fff, 1699px 1239px #fff,
    327px 266px #fff, 1059px 1045px #fff, 341px 1410px #fff, 1361px 235px #fff,
    1917px 846px #fff, 982px 788px #fff, 307px 648px #fff, 1637px 1026px #fff,
    1428px 812px #fff, 1835px 921px #fff, 1069px 1676px #fff, 1984px 1764px #fff,
    758px 1802px #fff, 1380px 1161px #fff, 1680px 600px #fff, 1046px 1280px #fff,
    14px 614px #fff, 1559px 1203px #fff, 1985px 803px #fff, 480px 992px #fff,
    1568px 1825px #fff, 1140px 1232px #fff, 1741px 555px #fff, 828px 835px #fff,
    805px 1418px #fff, 848px 1848px #fff, 1576px 848px #fff, 1906px 386px #fff,
    311px 1118px #fff, 6px 617px #fff, 724px 617px #fff, 1686px 338px #fff,
    591px 1872px #fff, 285px 1488px #fff, 1098px 1566px #fff, 1863px 908px #fff,
    952px 1328px #fff, 769px 101px #fff, 1530px 1142px #fff, 1932px 294px #fff,
    21px 1474px #fff, 1282px 161px #fff, 603px 1367px #fff, 1968px 489px #fff,
    831px 153px #fff, 347px 1079px #fff, 1638px 695px #fff, 868px 1371px #fff,
    1758px 1154px #fff, 1334px 1461px #fff, 579px 1688px #fff,
    1262px 1464px #fff, 864px 658px #fff, 1280px 542px #fff, 1139px 387px #fff,
    1600px 725px #fff, 1713px 346px #fff, 1051px 487px #fff, 625px 133px #fff,
    752px 1330px #fff;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: ' ';
  position: absolute;
  top: 100vh;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 316px 1525px #fff, 1298px 761px #fff, 497px 18px #fff,
    724px 520px #fff, 829px 790px #fff, 1833px 1933px #fff, 643px 1810px #fff,
    1006px 216px #fff, 330px 481px #fff, 1103px 297px #fff, 1618px 1466px #fff,
    1087px 991px #fff, 805px 498px #fff, 1053px 841px #fff, 1178px 470px #fff,
    1230px 1945px #fff, 1726px 1517px #fff, 1445px 626px #fff, 673px 245px #fff,
    38px 515px #fff, 1775px 184px #fff, 1358px 1185px #fff, 1676px 1921px #fff,
    1920px 1851px #fff, 1773px 786px #fff, 406px 252px #fff, 1412px 1801px #fff,
    883px 1708px #fff, 166px 1749px #fff, 1209px 1650px #fff, 1423px 1359px #fff,
    974px 1414px #fff, 552px 587px #fff, 1231px 912px #fff, 1161px 1524px #fff,
    672px 162px #fff, 311px 211px #fff, 1599px 1986px #fff, 1091px 687px #fff,
    514px 751px #fff, 873px 598px #fff, 350px 632px #fff, 248px 1148px #fff,
    1707px 740px #fff, 1884px 1444px #fff, 1694px 1170px #fff, 318px 1666px #fff,
    1021px 1621px #fff, 334px 439px #fff, 1401px 1680px #fff, 4px 1429px #fff,
    685px 23px #fff, 1226px 1116px #fff, 98px 208px #fff, 1547px 193px #fff,
    319px 832px #fff, 1919px 1579px #fff, 1930px 334px #fff, 808px 1527px #fff,
    1847px 1863px #fff, 1441px 1317px #fff, 972px 905px #fff, 247px 1095px #fff,
    435px 609px #fff, 114px 1715px #fff, 855px 1563px #fff, 1411px 840px #fff,
    547px 1244px #fff, 1841px 1216px #fff, 872px 1469px #fff, 826px 720px #fff,
    509px 1281px #fff, 801px 122px #fff, 1384px 1967px #fff, 869px 732px #fff,
    1825px 1940px #fff, 395px 734px #fff, 180px 1199px #fff, 1146px 1917px #fff,
    707px 1662px #fff, 1793px 241px #fff, 200px 1101px #fff, 147px 599px #fff,
    1832px 1862px #fff, 648px 1127px #fff, 1544px 935px #fff, 275px 838px #fff,
    480px 536px #fff, 1581px 958px #fff, 1889px 892px #fff, 724px 17px #fff,
    502px 788px #fff, 248px 791px #fff, 1333px 156px #fff, 1215px 978px #fff,
    1179px 1732px #fff, 874px 450px #fff, 1288px 238px #fff, 1854px 376px #fff,
    1128px 1603px #fff, 1936px 1667px #fff, 829px 412px #fff, 1624px 64px #fff,
    1979px 1404px #fff, 144px 458px #fff, 1935px 774px #fff, 1021px 1290px #fff,
    1554px 1094px #fff, 218px 1209px #fff, 986px 1126px #fff, 17px 391px #fff,
    589px 21px #fff, 341px 731px #fff, 1733px 1715px #fff, 331px 1877px #fff,
    1628px 50px #fff, 1855px 1233px #fff, 112px 1746px #fff, 1229px 678px #fff,
    1741px 373px #fff, 114px 1795px #fff, 1335px 627px #fff, 221px 1428px #fff,
    1431px 940px #fff, 1330px 1349px #fff, 1655px 343px #fff, 87px 1823px #fff,
    252px 1975px #fff, 1005px 206px #fff, 1831px 378px #fff, 867px 1416px #fff,
    1837px 760px #fff, 551px 1829px #fff, 1895px 975px #fff, 642px 1453px #fff,
    204px 367px #fff, 1657px 1939px #fff, 80px 108px #fff, 1757px 1741px #fff,
    939px 1333px #fff, 25px 292px #fff, 1482px 463px #fff, 1621px 1380px #fff,
    1036px 668px #fff, 591px 1089px #fff, 1483px 1693px #fff, 1984px 1789px #fff,
    429px 773px #fff, 486px 636px #fff, 636px 1875px #fff, 55px 1132px #fff,
    1041px 1543px #fff, 583px 1489px #fff, 1630px 13px #fff, 1322px 32px #fff,
    990px 1954px #fff, 667px 1930px #fff, 221px 1032px #fff, 1655px 491px #fff,
    1261px 1364px #fff, 1579px 1963px #fff, 782px 651px #fff, 779px 1955px #fff,
    910px 661px #fff, 1482px 1756px #fff, 1657px 1387px #fff, 1135px 652px #fff,
    118px 1868px #fff, 597px 935px #fff, 1753px 583px #fff, 1763px 1272px #fff,
    1413px 1525px #fff, 1762px 1604px #fff, 235px 1369px #fff, 990px 744px #fff,
    1497px 1278px #fff, 1445px 1890px #fff, 1496px 1812px #fff,
    1558px 1146px #fff, 1824px 1508px #fff, 1746px 681px #fff, 733px 1923px #fff,
    1028px 1667px #fff, 926px 1967px #fff, 1713px 902px #fff, 1374px 838px #fff,
    381px 1427px #fff, 1028px 955px #fff, 1449px 732px #fff, 1932px 556px #fff,
    226px 430px #fff, 173px 1820px #fff, 284px 1293px #fff, 1436px 1768px #fff,
    800px 930px #fff, 1278px 215px #fff, 1274px 542px #fff, 1880px 14px #fff,
    1124px 564px #fff, 907px 1053px #fff, 290px 1920px #fff, 93px 96px #fff,
    280px 1323px #fff, 608px 1228px #fff, 1934px 544px #fff, 1807px 1582px #fff,
    92px 1022px #fff, 1070px 1856px #fff, 594px 237px #fff, 1px 1446px #fff,
    651px 524px #fff, 664px 1442px #fff, 709px 1297px #fff, 1090px 608px #fff,
    462px 735px #fff, 1890px 413px #fff, 1636px 1769px #fff, 692px 1220px #fff,
    1824px 883px #fff, 377px 1971px #fff, 12px 298px #fff, 100px 721px #fff,
    169px 1758px #fff, 1582px 1355px #fff, 1227px 312px #fff, 1370px 1657px #fff,
    905px 1718px #fff, 1849px 489px #fff, 1104px 1963px #fff, 1694px 465px #fff,
    1527px 490px #fff, 1277px 1546px #fff, 519px 531px #fff, 104px 1337px #fff,
    329px 684px #fff, 1058px 84px #fff, 136px 774px #fff, 332px 395px #fff,
    694px 1476px #fff, 1830px 196px #fff, 1180px 343px #fff, 1817px 1531px #fff,
    534px 900px #fff, 1335px 1993px #fff, 1140px 142px #fff, 1966px 9px #fff,
    1990px 1639px #fff, 1842px 71px #fff, 960px 1025px #fff, 810px 1659px #fff,
    474px 520px #fff, 1649px 1201px #fff, 1017px 873px #fff, 1426px 1555px #fff,
    469px 485px #fff, 986px 786px #fff, 579px 1047px #fff, 1631px 1143px #fff,
    1004px 1507px #fff, 1705px 49px #fff, 1767px 344px #fff, 1796px 1299px #fff,
    37px 1588px #fff, 1699px 868px #fff, 6px 94px #fff, 818px 496px #fff,
    544px 1428px #fff, 652px 671px #fff, 884px 994px #fff, 1988px 915px #fff,
    1882px 1382px #fff, 68px 102px #fff, 662px 1350px #fff, 488px 72px #fff,
    1353px 126px #fff, 74px 1790px #fff, 361px 1123px #fff, 312px 1514px #fff,
    1860px 267px #fff, 1183px 121px #fff, 1540px 1398px #fff, 168px 1024px #fff,
    1795px 1559px #fff, 923px 367px #fff, 1270px 451px #fff, 1797px 580px #fff,
    1746px 731px #fff, 488px 911px #fff, 1577px 1345px #fff, 285px 1883px #fff,
    697px 693px #fff, 299px 115px #fff, 220px 211px #fff, 512px 357px #fff,
    644px 1740px #fff, 888px 817px #fff, 838px 549px #fff, 714px 221px #fff,
    844px 1467px #fff, 782px 484px #fff, 84px 521px #fff, 1027px 1168px #fff,
    563px 1986px #fff, 717px 484px #fff, 52px 888px #fff, 824px 1445px #fff,
    1161px 1329px #fff, 1176px 95px #fff, 285px 1817px #fff, 1047px 354px #fff,
    388px 1067px #fff, 502px 1589px #fff, 1648px 1714px #fff, 605px 1359px #fff,
    1313px 820px #fff, 437px 908px #fff, 979px 1105px #fff, 1009px 753px #fff,
    1938px 1230px #fff, 1127px 1945px #fff, 1786px 1162px #fff, 1247px 13px #fff,
    1524px 1732px #fff, 1843px 939px #fff, 793px 630px #fff, 1135px 1682px #fff,
    1403px 1081px #fff, 95px 77px #fff, 664px 219px #fff, 1169px 721px #fff,
    1967px 1344px #fff, 883px 1843px #fff, 1632px 1815px #fff, 73px 759px #fff,
    658px 602px #fff, 576px 894px #fff, 653px 1541px #fff, 1299px 1294px #fff,
    393px 77px #fff, 1084px 1893px #fff, 1276px 1863px #fff, 1401px 68px #fff,
    1774px 797px #fff, 595px 595px #fff, 173px 1938px #fff, 1240px 1275px #fff,
    1717px 1289px #fff, 1412px 628px #fff, 981px 830px #fff, 1784px 1913px #fff,
    1480px 1179px #fff, 1984px 1711px #fff, 1547px 768px #fff, 259px 973px #fff,
    1531px 117px #fff, 1379px 1822px #fff, 1821px 186px #fff, 1247px 741px #fff,
    1354px 342px #fff, 1542px 1071px #fff, 1722px 727px #fff, 919px 1767px #fff,
    693px 576px #fff, 1125px 1714px #fff, 772px 987px #fff, 140px 1843px #fff,
    1741px 119px #fff, 869px 1792px #fff, 1379px 1075px #fff, 200px 438px #fff,
    311px 1189px #fff, 338px 1262px #fff, 1669px 1689px #fff, 1245px 298px #fff,
    590px 1573px #fff, 1598px 657px #fff, 1808px 1125px #fff, 369px 1975px #fff,
    1175px 1291px #fff, 1440px 517px #fff, 1906px 1435px #fff, 827px 780px #fff,
    581px 1950px #fff, 1163px 317px #fff, 340px 1821px #fff, 735px 1790px #fff,
    1344px 1531px #fff, 1290px 141px #fff, 1095px 1682px #fff, 160px 977px #fff,
    1682px 1173px #fff, 180px 546px #fff, 807px 380px #fff, 1394px 1536px #fff,
    1205px 364px #fff, 1776px 207px #fff, 489px 549px #fff, 769px 175px #fff,
    1602px 1990px #fff, 1661px 64px #fff, 439px 484px #fff, 1026px 420px #fff,
    1136px 264px #fff, 487px 774px #fff, 1594px 624px #fff, 1154px 69px #fff,
    596px 249px #fff, 818px 813px #fff, 1568px 145px #fff, 990px 780px #fff,
    1424px 547px #fff, 674px 993px #fff, 1657px 205px #fff, 1211px 1298px #fff,
    1630px 1961px #fff, 738px 1394px #fff, 101px 1874px #fff, 1487px 1934px #fff,
    1749px 933px #fff, 1065px 460px #fff, 282px 1091px #fff, 392px 764px #fff,
    1255px 363px #fff, 1875px 772px #fff, 560px 1471px #fff, 604px 365px #fff,
    1294px 960px #fff, 887px 1219px #fff, 81px 1547px #fff, 1858px 281px #fff,
    1084px 1913px #fff, 1840px 91px #fff, 1774px 1761px #fff, 966px 618px #fff,
    787px 1679px #fff, 487px 232px #fff, 1068px 936px #fff, 572px 964px #fff,
    1783px 1385px #fff, 1835px 424px #fff, 461px 524px #fff, 1000px 27px #fff,
    1087px 1973px #fff, 601px 402px #fff, 1661px 1523px #fff, 581px 1834px #fff,
    1589px 148px #fff, 704px 61px #fff, 1549px 783px #fff, 346px 1252px #fff,
    564px 1195px #fff, 1914px 37px #fff, 554px 1487px #fff, 359px 1678px #fff,
    1129px 1442px #fff, 1080px 348px #fff, 739px 1435px #fff, 374px 562px #fff,
    1139px 258px #fff, 1784px 1089px #fff, 2000px 607px #fff, 1362px 638px #fff,
    1076px 1569px #fff, 356px 1871px #fff, 1851px 187px #fff, 408px 178px #fff,
    762px 1354px #fff, 149px 1574px #fff, 570px 833px #fff, 1682px 923px #fff,
    805px 1199px #fff, 293px 1691px #fff, 376px 1648px #fff, 460px 122px #fff,
    1417px 1564px #fff, 927px 686px #fff, 631px 1993px #fff, 1302px 1149px #fff,
    176px 338px #fff, 1192px 1763px #fff, 1942px 1173px #fff, 78px 1415px #fff,
    26px 1649px #fff, 1372px 1156px #fff, 1171px 1263px #fff, 260px 215px #fff,
    207px 699px #fff, 963px 91px #fff, 928px 1492px #fff, 912px 1335px #fff,
    1967px 1173px #fff, 633px 202px #fff, 1182px 358px #fff, 868px 772px #fff,
    1358px 824px #fff, 1274px 148px #fff, 1708px 761px #fff, 797px 1329px #fff,
    678px 1016px #fff, 367px 116px #fff, 615px 1276px #fff, 1178px 361px #fff,
    1877px 570px #fff, 1390px 1063px #fff, 1934px 1310px #fff, 54px 1907px #fff,
    190px 1998px #fff, 1787px 229px #fff, 1705px 140px #fff, 470px 370px #fff,
    223px 1599px #fff, 211px 1320px #fff, 761px 131px #fff, 1466px 1241px #fff,
    98px 1981px #fff, 914px 1141px #fff, 1067px 1863px #fff, 170px 905px #fff,
    315px 1989px #fff, 194px 1034px #fff, 201px 908px #fff, 1947px 923px #fff,
    251px 1187px #fff, 771px 557px #fff, 1478px 1962px #fff, 1381px 1518px #fff,
    1781px 702px #fff, 1719px 1484px #fff, 609px 1340px #fff, 1457px 1661px #fff,
    1430px 1957px #fff, 1692px 395px #fff, 1348px 1093px #fff, 3px 1885px #fff,
    856px 1656px #fff, 521px 29px #fff, 212px 928px #fff, 1278px 460px #fff,
    1832px 1452px #fff, 985px 402px #fff, 1191px 975px #fff, 707px 1400px #fff,
    777px 1245px #fff, 1200px 1178px #fff, 1847px 1670px #fff, 92px 15px #fff,
    1842px 1076px #fff, 213px 1523px #fff, 916px 1018px #fff, 735px 1862px #fff,
    318px 1868px #fff, 1852px 717px #fff, 158px 1695px #fff, 990px 1842px #fff,
    190px 1179px #fff, 1872px 1569px #fff, 654px 338px #fff, 574px 24px #fff,
    1779px 298px #fff, 1782px 154px #fff, 367px 914px #fff, 70px 1021px #fff,
    649px 1536px #fff, 963px 226px #fff, 693px 1836px #fff, 1048px 682px #fff,
    1304px 1290px #fff, 1223px 481px #fff, 1432px 321px #fff, 1342px 754px #fff,
    1422px 1199px #fff, 517px 1763px #fff, 1529px 1108px #fff, 1679px 45px #fff,
    382px 1757px #fff, 165px 380px #fff, 443px 1624px #fff, 1851px 451px #fff,
    1075px 1547px #fff, 1591px 699px #fff, 1909px 551px #fff, 1608px 191px #fff,
    1885px 1201px #fff, 1660px 1565px #fff, 1997px 1637px #fff,
    1580px 545px #fff, 875px 676px #fff, 1943px 548px #fff, 1488px 987px #fff,
    91px 1450px #fff, 522px 1476px #fff, 207px 1729px #fff, 1809px 624px #fff,
    64px 38px #fff, 274px 1384px #fff, 1403px 1465px #fff, 73px 160px #fff,
    958px 440px #fff, 1990px 540px #fff, 907px 1833px #fff, 952px 684px #fff,
    593px 281px #fff, 274px 733px #fff, 252px 503px #fff, 359px 1531px #fff,
    1283px 1180px #fff, 1056px 1356px #fff, 360px 938px #fff, 561px 984px #fff,
    337px 87px #fff, 1154px 1025px #fff, 1742px 734px #fff, 660px 928px #fff,
    1322px 719px #fff, 469px 781px #fff, 51px 769px #fff, 425px 90px #fff,
    927px 1234px #fff, 1128px 267px #fff, 1349px 361px #fff, 316px 1097px #fff,
    1673px 1834px #fff, 1524px 1201px #fff, 1328px 183px #fff, 1126px 265px #fff,
    1659px 1939px #fff, 1502px 1837px #fff, 1415px 1961px #fff,
    1873px 136px #fff, 1853px 1150px #fff, 927px 1166px #fff, 1824px 1102px #fff,
    553px 600px #fff, 188px 675px #fff, 338px 99px #fff, 1417px 1101px #fff,
    1716px 1340px #fff, 1029px 1492px #fff, 194px 837px #fff, 1699px 1239px #fff,
    327px 266px #fff, 1059px 1045px #fff, 341px 1410px #fff, 1361px 235px #fff,
    1917px 846px #fff, 982px 788px #fff, 307px 648px #fff, 1637px 1026px #fff,
    1428px 812px #fff, 1835px 921px #fff, 1069px 1676px #fff, 1984px 1764px #fff,
    758px 1802px #fff, 1380px 1161px #fff, 1680px 600px #fff, 1046px 1280px #fff,
    14px 614px #fff, 1559px 1203px #fff, 1985px 803px #fff, 480px 992px #fff,
    1568px 1825px #fff, 1140px 1232px #fff, 1741px 555px #fff, 828px 835px #fff,
    805px 1418px #fff, 848px 1848px #fff, 1576px 848px #fff, 1906px 386px #fff,
    311px 1118px #fff, 6px 617px #fff, 724px 617px #fff, 1686px 338px #fff,
    591px 1872px #fff, 285px 1488px #fff, 1098px 1566px #fff, 1863px 908px #fff,
    952px 1328px #fff, 769px 101px #fff, 1530px 1142px #fff, 1932px 294px #fff,
    21px 1474px #fff, 1282px 161px #fff, 603px 1367px #fff, 1968px 489px #fff,
    831px 153px #fff, 347px 1079px #fff, 1638px 695px #fff, 868px 1371px #fff,
    1758px 1154px #fff, 1334px 1461px #fff, 579px 1688px #fff,
    1262px 1464px #fff, 864px 658px #fff, 1280px 542px #fff, 1139px 387px #fff,
    1600px 725px #fff, 1713px 346px #fff, 1051px 487px #fff, 625px 133px #fff,
    752px 1330px #fff;
}
#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 458px 1715px #fff, 593px 46px #fff, 385px 1716px #fff,
    1311px 484px #fff, 1569px 466px #fff, 1601px 1470px #fff, 1783px 843px #fff,
    1707px 122px #fff, 1960px 170px #fff, 719px 1340px #fff, 972px 2px #fff,
    1948px 1131px #fff, 1094px 805px #fff, 1293px 255px #fff, 1947px 1459px #fff,
    217px 202px #fff, 1042px 115px #fff, 732px 990px #fff, 1290px 301px #fff,
    320px 120px #fff, 411px 1081px #fff, 1018px 1582px #fff, 325px 1351px #fff,
    894px 121px #fff, 1813px 226px #fff, 829px 1237px #fff, 981px 1500px #fff,
    95px 1381px #fff, 1469px 871px #fff, 481px 620px #fff, 859px 470px #fff,
    848px 1585px #fff, 1075px 1697px #fff, 216px 234px #fff, 174px 781px #fff,
    433px 768px #fff, 1976px 111px #fff, 1498px 752px #fff, 1px 450px #fff,
    926px 1580px #fff, 1452px 1499px #fff, 1250px 1816px #fff, 1703px 941px #fff,
    127px 793px #fff, 296px 1158px #fff, 1199px 1158px #fff, 892px 937px #fff,
    398px 1510px #fff, 1547px 915px #fff, 687px 1293px #fff, 421px 563px #fff,
    917px 394px #fff, 1386px 1723px #fff, 694px 1252px #fff, 1780px 847px #fff,
    1393px 813px #fff, 1135px 261px #fff, 1178px 1999px #fff, 1484px 452px #fff,
    1471px 816px #fff, 922px 654px #fff, 530px 105px #fff, 1714px 593px #fff,
    481px 270px #fff, 1386px 205px #fff, 142px 1514px #fff, 838px 994px #fff,
    745px 1389px #fff, 917px 113px #fff, 679px 357px #fff, 610px 1992px #fff,
    1162px 513px #fff, 1157px 1878px #fff, 587px 1501px #fff, 795px 1020px #fff,
    296px 911px #fff, 1948px 690px #fff, 660px 1767px #fff, 163px 44px #fff,
    1710px 1854px #fff, 1148px 1995px #fff, 612px 533px #fff, 480px 1582px #fff,
    601px 363px #fff, 1053px 1113px #fff, 663px 1243px #fff, 425px 1994px #fff,
    707px 324px #fff, 1985px 900px #fff, 1660px 745px #fff, 1057px 1459px #fff,
    1926px 1847px #fff, 1220px 166px #fff, 1303px 1064px #fff,
    1550px 1629px #fff, 1548px 1239px #fff, 1627px 1283px #fff,
    1234px 170px #fff, 384px 579px #fff, 126px 1728px #fff, 363px 667px #fff,
    1591px 1158px #fff, 241px 414px #fff, 484px 596px #fff, 1918px 883px #fff,
    617px 640px #fff, 269px 859px #fff, 647px 1180px #fff, 101px 792px #fff,
    978px 1424px #fff, 1545px 640px #fff, 695px 856px #fff, 33px 917px #fff,
    1676px 645px #fff, 1519px 288px #fff, 871px 287px #fff, 1416px 751px #fff,
    213px 181px #fff, 622px 1915px #fff, 1176px 497px #fff, 1297px 1315px #fff,
    195px 1104px #fff, 1398px 1051px #fff, 1413px 334px #fff, 1188px 1453px #fff,
    737px 1570px #fff, 1967px 349px #fff, 1728px 1676px #fff, 83px 196px #fff,
    1781px 1229px #fff, 471px 1153px #fff, 335px 296px #fff, 1074px 1900px #fff,
    948px 804px #fff, 948px 1510px #fff, 68px 608px #fff, 1007px 1622px #fff,
    1053px 1615px #fff, 386px 1757px #fff, 283px 1713px #fff, 1855px 139px #fff,
    1134px 1196px #fff, 920px 1822px #fff, 365px 1630px #fff, 1485px 356px #fff,
    817px 679px #fff, 369px 1868px #fff, 1186px 1987px #fff, 1668px 611px #fff,
    184px 999px #fff, 1880px 1844px #fff, 1411px 1232px #fff, 434px 1536px #fff,
    592px 113px #fff, 616px 645px #fff, 705px 1258px #fff, 59px 955px #fff,
    1094px 1829px #fff, 1485px 549px #fff, 881px 8px #fff, 279px 552px #fff,
    1843px 146px #fff, 1557px 191px #fff, 416px 1919px #fff, 1832px 119px #fff,
    770px 1382px #fff, 1537px 564px #fff, 978px 182px #fff, 543px 1579px #fff,
    1153px 1171px #fff, 484px 1526px #fff, 38px 468px #fff, 1372px 775px #fff,
    1824px 262px #fff, 1598px 146px #fff, 952px 1645px #fff, 225px 347px #fff,
    305px 1262px #fff, 1463px 1300px #fff, 1042px 1008px #fff, 699px 1167px #fff,
    1949px 1366px #fff, 684px 1711px #fff, 951px 974px #fff, 1873px 579px #fff,
    825px 1167px #fff, 1594px 880px #fff, 411px 1397px #fff, 819px 1420px #fff,
    85px 1179px #fff, 1218px 1199px #fff, 1324px 351px #fff, 768px 1620px #fff,
    1962px 1756px #fff, 1379px 1631px #fff, 117px 118px #fff, 80px 1305px #fff,
    1180px 1897px #fff, 390px 355px #fff, 1572px 924px #fff;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: ' ';
  position: absolute;
  top: 100vh;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 458px 1715px #fff, 593px 46px #fff, 385px 1716px #fff,
    1311px 484px #fff, 1569px 466px #fff, 1601px 1470px #fff, 1783px 843px #fff,
    1707px 122px #fff, 1960px 170px #fff, 719px 1340px #fff, 972px 2px #fff,
    1948px 1131px #fff, 1094px 805px #fff, 1293px 255px #fff, 1947px 1459px #fff,
    217px 202px #fff, 1042px 115px #fff, 732px 990px #fff, 1290px 301px #fff,
    320px 120px #fff, 411px 1081px #fff, 1018px 1582px #fff, 325px 1351px #fff,
    894px 121px #fff, 1813px 226px #fff, 829px 1237px #fff, 981px 1500px #fff,
    95px 1381px #fff, 1469px 871px #fff, 481px 620px #fff, 859px 470px #fff,
    848px 1585px #fff, 1075px 1697px #fff, 216px 234px #fff, 174px 781px #fff,
    433px 768px #fff, 1976px 111px #fff, 1498px 752px #fff, 1px 450px #fff,
    926px 1580px #fff, 1452px 1499px #fff, 1250px 1816px #fff, 1703px 941px #fff,
    127px 793px #fff, 296px 1158px #fff, 1199px 1158px #fff, 892px 937px #fff,
    398px 1510px #fff, 1547px 915px #fff, 687px 1293px #fff, 421px 563px #fff,
    917px 394px #fff, 1386px 1723px #fff, 694px 1252px #fff, 1780px 847px #fff,
    1393px 813px #fff, 1135px 261px #fff, 1178px 1999px #fff, 1484px 452px #fff,
    1471px 816px #fff, 922px 654px #fff, 530px 105px #fff, 1714px 593px #fff,
    481px 270px #fff, 1386px 205px #fff, 142px 1514px #fff, 838px 994px #fff,
    745px 1389px #fff, 917px 113px #fff, 679px 357px #fff, 610px 1992px #fff,
    1162px 513px #fff, 1157px 1878px #fff, 587px 1501px #fff, 795px 1020px #fff,
    296px 911px #fff, 1948px 690px #fff, 660px 1767px #fff, 163px 44px #fff,
    1710px 1854px #fff, 1148px 1995px #fff, 612px 533px #fff, 480px 1582px #fff,
    601px 363px #fff, 1053px 1113px #fff, 663px 1243px #fff, 425px 1994px #fff,
    707px 324px #fff, 1985px 900px #fff, 1660px 745px #fff, 1057px 1459px #fff,
    1926px 1847px #fff, 1220px 166px #fff, 1303px 1064px #fff,
    1550px 1629px #fff, 1548px 1239px #fff, 1627px 1283px #fff,
    1234px 170px #fff, 384px 579px #fff, 126px 1728px #fff, 363px 667px #fff,
    1591px 1158px #fff, 241px 414px #fff, 484px 596px #fff, 1918px 883px #fff,
    617px 640px #fff, 269px 859px #fff, 647px 1180px #fff, 101px 792px #fff,
    978px 1424px #fff, 1545px 640px #fff, 695px 856px #fff, 33px 917px #fff,
    1676px 645px #fff, 1519px 288px #fff, 871px 287px #fff, 1416px 751px #fff,
    213px 181px #fff, 622px 1915px #fff, 1176px 497px #fff, 1297px 1315px #fff,
    195px 1104px #fff, 1398px 1051px #fff, 1413px 334px #fff, 1188px 1453px #fff,
    737px 1570px #fff, 1967px 349px #fff, 1728px 1676px #fff, 83px 196px #fff,
    1781px 1229px #fff, 471px 1153px #fff, 335px 296px #fff, 1074px 1900px #fff,
    948px 804px #fff, 948px 1510px #fff, 68px 608px #fff, 1007px 1622px #fff,
    1053px 1615px #fff, 386px 1757px #fff, 283px 1713px #fff, 1855px 139px #fff,
    1134px 1196px #fff, 920px 1822px #fff, 365px 1630px #fff, 1485px 356px #fff,
    817px 679px #fff, 369px 1868px #fff, 1186px 1987px #fff, 1668px 611px #fff,
    184px 999px #fff, 1880px 1844px #fff, 1411px 1232px #fff, 434px 1536px #fff,
    592px 113px #fff, 616px 645px #fff, 705px 1258px #fff, 59px 955px #fff,
    1094px 1829px #fff, 1485px 549px #fff, 881px 8px #fff, 279px 552px #fff,
    1843px 146px #fff, 1557px 191px #fff, 416px 1919px #fff, 1832px 119px #fff,
    770px 1382px #fff, 1537px 564px #fff, 978px 182px #fff, 543px 1579px #fff,
    1153px 1171px #fff, 484px 1526px #fff, 38px 468px #fff, 1372px 775px #fff,
    1824px 262px #fff, 1598px 146px #fff, 952px 1645px #fff, 225px 347px #fff,
    305px 1262px #fff, 1463px 1300px #fff, 1042px 1008px #fff, 699px 1167px #fff,
    1949px 1366px #fff, 684px 1711px #fff, 951px 974px #fff, 1873px 579px #fff,
    825px 1167px #fff, 1594px 880px #fff, 411px 1397px #fff, 819px 1420px #fff,
    85px 1179px #fff, 1218px 1199px #fff, 1324px 351px #fff, 768px 1620px #fff,
    1962px 1756px #fff, 1379px 1631px #fff, 117px 118px #fff, 80px 1305px #fff,
    1180px 1897px #fff, 390px 355px #fff, 1572px 924px #fff;
}
#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 226px 1338px #fff, 917px 974px #fff, 1066px 450px #fff,
    1822px 1508px #fff, 1465px 763px #fff, 1918px 783px #fff, 1301px 968px #fff,
    1165px 1510px #fff, 1292px 1376px #fff, 1733px 1176px #fff,
    102px 1128px #fff, 489px 1974px #fff, 871px 471px #fff, 797px 1699px #fff,
    287px 296px #fff, 717px 1891px #fff, 57px 731px #fff, 1108px 88px #fff,
    802px 754px #fff, 1020px 1609px #fff, 671px 1835px #fff, 533px 821px #fff,
    1099px 1786px #fff, 1488px 557px #fff, 1874px 104px #fff, 225px 109px #fff,
    780px 1710px #fff, 434px 1525px #fff, 1602px 813px #fff, 548px 1225px #fff,
    1988px 1006px #fff, 640px 599px #fff, 39px 1735px #fff, 1782px 292px #fff,
    1970px 44px #fff, 1287px 1368px #fff, 798px 1380px #fff, 1619px 1102px #fff,
    516px 501px #fff, 1718px 1127px #fff, 1251px 1647px #fff, 1087px 744px #fff,
    568px 1532px #fff, 1132px 131px #fff, 781px 906px #fff, 517px 1616px #fff,
    84px 686px #fff, 351px 1160px #fff, 601px 941px #fff, 1227px 1214px #fff,
    1667px 1319px #fff, 316px 1273px #fff, 287px 1428px #fff, 219px 326px #fff,
    1285px 1686px #fff, 1729px 81px #fff, 101px 1887px #fff, 1078px 1425px #fff,
    1468px 1281px #fff, 431px 1939px #fff, 641px 959px #fff, 626px 981px #fff,
    1192px 793px #fff, 983px 1756px #fff, 441px 1053px #fff, 1567px 1028px #fff,
    1415px 863px #fff, 2px 1893px #fff, 737px 1682px #fff, 1349px 1978px #fff,
    1141px 895px #fff, 622px 1989px #fff, 1566px 1636px #fff, 1393px 909px #fff,
    835px 199px #fff, 195px 1080px #fff, 411px 1941px #fff, 1479px 757px #fff,
    531px 1540px #fff, 167px 894px #fff, 1509px 267px #fff, 123px 642px #fff,
    1357px 234px #fff, 360px 696px #fff, 59px 1233px #fff, 1207px 687px #fff,
    833px 1224px #fff, 1993px 456px #fff, 967px 96px #fff, 1497px 1823px #fff,
    715px 632px #fff, 1669px 1136px #fff, 1993px 126px #fff, 1739px 289px #fff,
    1683px 520px #fff, 313px 1102px #fff, 822px 1038px #fff, 124px 588px #fff,
    1512px 876px #fff, 404px 1653px #fff;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: ' ';
  position: absolute;
  top: 100vh;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 226px 1338px #fff, 917px 974px #fff, 1066px 450px #fff,
    1822px 1508px #fff, 1465px 763px #fff, 1918px 783px #fff, 1301px 968px #fff,
    1165px 1510px #fff, 1292px 1376px #fff, 1733px 1176px #fff,
    102px 1128px #fff, 489px 1974px #fff, 871px 471px #fff, 797px 1699px #fff,
    287px 296px #fff, 717px 1891px #fff, 57px 731px #fff, 1108px 88px #fff,
    802px 754px #fff, 1020px 1609px #fff, 671px 1835px #fff, 533px 821px #fff,
    1099px 1786px #fff, 1488px 557px #fff, 1874px 104px #fff, 225px 109px #fff,
    780px 1710px #fff, 434px 1525px #fff, 1602px 813px #fff, 548px 1225px #fff,
    1988px 1006px #fff, 640px 599px #fff, 39px 1735px #fff, 1782px 292px #fff,
    1970px 44px #fff, 1287px 1368px #fff, 798px 1380px #fff, 1619px 1102px #fff,
    516px 501px #fff, 1718px 1127px #fff, 1251px 1647px #fff, 1087px 744px #fff,
    568px 1532px #fff, 1132px 131px #fff, 781px 906px #fff, 517px 1616px #fff,
    84px 686px #fff, 351px 1160px #fff, 601px 941px #fff, 1227px 1214px #fff,
    1667px 1319px #fff, 316px 1273px #fff, 287px 1428px #fff, 219px 326px #fff,
    1285px 1686px #fff, 1729px 81px #fff, 101px 1887px #fff, 1078px 1425px #fff,
    1468px 1281px #fff, 431px 1939px #fff, 641px 959px #fff, 626px 981px #fff,
    1192px 793px #fff, 983px 1756px #fff, 441px 1053px #fff, 1567px 1028px #fff,
    1415px 863px #fff, 2px 1893px #fff, 737px 1682px #fff, 1349px 1978px #fff,
    1141px 895px #fff, 622px 1989px #fff, 1566px 1636px #fff, 1393px 909px #fff,
    835px 199px #fff, 195px 1080px #fff, 411px 1941px #fff, 1479px 757px #fff,
    531px 1540px #fff, 167px 894px #fff, 1509px 267px #fff, 123px 642px #fff,
    1357px 234px #fff, 360px 696px #fff, 59px 1233px #fff, 1207px 687px #fff,
    833px 1224px #fff, 1993px 456px #fff, 967px 96px #fff, 1497px 1823px #fff,
    715px 632px #fff, 1669px 1136px #fff, 1993px 126px #fff, 1739px 289px #fff,
    1683px 520px #fff, 313px 1102px #fff, 822px 1038px #fff, 124px 588px #fff,
    1512px 876px #fff, 404px 1653px #fff;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
