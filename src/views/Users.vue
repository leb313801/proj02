<template>
  <div id="app">
    유저 이름: <input
      v-model="userName"
      type="text"
    >
    <button @click="searchName">
      검색
    </button>

    <div
      v-for="(item, idx) in computedList"
      :key="idx"
    >
      제목: {{ item.title }} 
      저자: {{ item.author }}
    </div>
    <div>
      <ul>
        <li>orange</li>
        <li>apple</li>
        <li>banana</li>
        <li>strawberry</li>
      </ul>
    </div>
    <hr/>
    <select name="slt" @change="onChange">
      <option value="">선택</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <input type="text" name="addr" ref="addr" v-model="addr" :disabled="true" placeholder="내용을 입력하세요" @keyup="keyUpEvent"> <button @click="inputAddr">확인</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapGetters 함수를 가져옵니다.
import { mapActions, mapGetters } from 'vuex'

/*
  namespaced: true를 사용했기 때문에 선언해줍니다.
  index.js 에서 modules 객체의 '키' 이름입니다.

  modules: {
    키: 값
    userStore: userStore,
    postStore: postStore
  }  
*/
const userStore = 'userStore'
const postStore = 'postStore'

export default {
  name: 'App',
  data() {
    return {
      userName: '',
      addr:''
    }
  },
  computed: {
    /*
      mapGetter는 store의 getters를 가져옵니다.

      네임스페이스를 사용하기 때문에 키 이름을 적어줍니다. (userStore, postStore)

      2가지 방식으로 가져올 수 있습니다.
      1) 이름 지정해서 가져오기
      2) getters 이름 그대로 사용해서 가져오기
    */
    // 1) 이름 지정해서 가져오기
    ...mapGetters(userStore, {
      storeUserName: 'GE_USER_NAME'
    }),

    // 2) getters 이름 그대로 사용해서 가져오기
    ...mapGetters(postStore, [
      'GE_POST_LIST'
    ]),    

    // 스토어의 리스트 중에서 검색한 유저이름의 포스트 목록만 반환합니다.
    computedList() {
      let list = []

      for(let item of this.GE_POST_LIST) {
        if(item.author == this.storeUserName) {
          list.push(item)
        }
      }

      return list
    }
  },
  watch: {
    // getters에 watch를 걸 수 있습니다.
    storeUserName(val) {
      this.userName = val
    }
  },  
  mounted() {
    console.log("갯수 : " + this.print() )
  },
  created() {
    this.userName = this.storeUserName

    const [a,b,c] = [1,2,3]
    console.log('a:' + a)
    console.log('b:' + b)
    console.log('c:' + c)

    const obj = {x:'banana', y: 'apple'}
    let  {x,y,z} = obj
    console.log('x:' + x + ' y:'+ y + ' z:' + z)

    let total = this.sum(3, 'hello',true)
    console.log("total:" + total )

    console.log("sums:" + this.sums(...[2,2,2]))

    let pre = ["apple", "orange", 100]
    let newData = [...pre]

    console.log(`pre : ${pre} / ${newData}`)

    let arr = [0,10,...pre, 400]
    console.log(`배열 합치기 :  ${arr}`)

    let arrs = [100,200,300]
    //let arrs = {x: 100, y:200, z:300}
    console.log(`배열연산 : ${this.sums.apply(null,arrs)}`)
    //console.log(`배열 연산 : ${this.sums(...arrs)}`)

    this.addMark([1,2])
    
    let mark = "MARK"

    let objs = {
      [mark + 2] : "코끼리"
    }
    objs[mark + '1'] = "아이언맨"

    console.log("오브젝트1 : " + objs.MARK1 + "/ 오브젝트2 : " + objs.MARK2 )

    let obj3 = {
      name : '홍길동',
      age : 26,
      bag : {
        item_1 : '지갑',
        item_2 : '전공서적'
      }
    };

    const {name, bag: {item_1}} = obj3
    console.log("name:" + name + "/item_1:" + item_1 )

    //const arr1 = ['string', {}, 1, true]
    //const [str, obj3, , bool] = arr1

    const test = ({name, age, bag}) => {
      console.log(`name: ${name}, age: ${age}, bag1: ${bag.item_1}, bag2: ${bag.item_2}`)
    }
    test(obj3)

    const obj4 = {a:10, ...obj3}
    console.log("obj4 : " + JSON.stringify(obj4))
    console.log("obj4 : " + obj4.bag.item_1 )

    const data = [1,2,3,4,5]

    let result = data.map(d => d + 1)
    console.log("result : " + result )


    const filterProducts = [
        {name: "반팔티", price: 15000},
        {name: "반팔티", price: 20000},
        {name: "핸드폰케이스", price: 15000},
        {name: "후드티", price: 30000},
        {name: "바지", price: 25000}
    ];

    let under20000 = [];
    for (const p of filterProducts) {
        if (p.price < 20000) {
            under20000.push(p);
        }
    }

    // 전개 연산자 사용
    console.log("----------")
    console.log(...under20000);
    console.log("----------")

    console.log(filterProducts[2])

    const data1 = [6,7]
    const datasum = [...data,...data1]
    console.log(datasum)

    const [firstv] = datasum
    console.log("firstv:" + firstv)

    const [first,second,...others] = data
    console.log(first,second,others)

    function func(){
      console.log(JSON.stringify(arguments))

      let args = Array.prototype.slice.call(arguments)
      console.log(JSON.stringify(args))
      console.log(args[0])
      console.log(args.slice(1))

    }
    func(1,2,3,4,5)


    function func1(first,...args){
      //console.log(JSON.stringify(arguments))

      //let args = Array.prototype.slice.call(arguments)
      //console.log(JSON.stringify(args))
      console.log(first)
      console.log(args[0])
      console.log(args.slice(1))

    }
    func1(1,2,3,4,5)


    const arr1 = []
    arr1.push(1,2,3)
    console.log(arr1)
    


  }, 
  methods: {
    /*
      mapGetter는 store의 getters를 가져옵니다.

      네임스페이스를 사용하기 때문에 키 이름을 적어줍니다. (userStore, postStore)

      2가지 방식으로 가져올 수 있습니다.
      1) 이름 지정해서 가져오기
      2) getters 이름 그대로 사용해서 가져오기      

      개인의 취향이지만, getters 이름 그대로 사용하는 것을 추천드립니다.

      다른 메소드 이름으로 매핑 예를 들면, setUserName: AC_USER_NAME 하면,
      setUserName 함수가 나중에는 스토어 함수인지, 현재 파일의 함수인지 헷갈리는 경우가 있습니다.
    */
    ...mapActions(userStore, [
      'AC_USER_NAME'
    ]),
    // 버튼을 클릭하면 수행됩니다.
    searchName() {
      const payload = {
        userName: this.userName
      }
      // store의 userName을 변경합니다.
      this.AC_USER_NAME(payload)
    },
    sum: (x,...y) => x + y.length ,
    sums: (x,y,z) => x + y + z,
    addMark: (v) => {
      let newData = [];
      for(let i = 0; i< v.length; i++ ) {
        newData.push(v[i] + '!');
      }
      console.log(newData)
    },
    print: () => { 
      let list = document.querySelectorAll("li")
      let listArray = Array.from(list)
      // let result = listArray.filter(fruit => fruit.includes('e'))
      let resultArray = listArray.filter(function(v) {
        return v.innerText.includes("e") //도메인에서 뽑아내는 innerText
      });
      return resultArray.length;
      
    },
    inputAddr() {
      this.$refs.addr.disabled = false;
      this.$refs.addr.placeholder = '';
      this.$refs.addr.focus();
      console.log(this.$refs.addr.disabled)

      let name = 'user';
      let nObj = name + 'Name';
      nObj = '홍길동';
      
      
     
      console.log('userName:' + nObj);

      this.$nextTick(() => {
        this.$refs.addr.value = '';
        this.$refs.addr.style.cssText = '';
      });


    },
    onChange(event){
      console.log(event.target.name)
      const refName ="addr";
      this.$refs[refName].disabled = false;
      this.$refs[refName].placeholder = '';
      this.$refs[refName].focus();
      this.$refs[refName].style.cssText = "background-color:#66BB6A !important; border:1px solid #66BB6A !important; color:#fff !important;";
    },
    keyUpEvent(event){
      console.log(event.target.name)
      console.log("value:" + this.$refs.addr.value)
    }
  }
}
</script>

<style>

</style>