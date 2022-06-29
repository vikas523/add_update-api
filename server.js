






// app.post("/add", async (req, res) => {
//     try {
//       const data = new jsModel({
//         secondTextEmoji: req.body.secondTextEmoji,
//         faviconUrl: req.body.faviconUrl,
//         icon: req.body.icon,
//         firstText: req.body.firstText,
//         secondText: req.body.secondText,
//         firstTextEmoji: req.body.firstTextEmoji,
//         // shopName:req.query
//       });
//       const dataSave = await data.save();
//       // const shopDetail = await shopModel.find({});
//       // const shopName=shopDetail[1].shop
//       // console.log(shopName);
//       // const { domain } = req.body;
//      const shopDetail = await shopModel.find({});
//      const detail =shopDetail[1].shop
//      console.log(detail);
//       res.status(200).json({
//         msg: "data is stored in database",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   });

  // const shopData =  shopModel.find({ shop });
  // console.log(shopData);



  app.post('/addUpdate',async(req,res)=>{
    try {
      const { secondTextEmoji, faviconUrl,firstTextEmoji, icon, firstText, secondText, } = req.body;
      const {shop} = req.body;
      const shopData = await jsModel.find({shop});
      if (shopData.length >= 1){
        const updaterecord = await jsModel.findOneAndUpdate({ shop: shop }, req.body, {
          new: true,
        });
        res.status(200).send(updaterecord);
        console.log(updaterecord);
        res.json({
          msg:"ur detail is already stored in database "
        })
      }else {
        const response = await jsModel.create({
          secondTextEmoji,
          faviconUrl,
          firstTextEmoji,
          icon,
          firstText,
          secondText,
          shop
        });
        res.status(200).json({
          msg: "data is stored in database",
        });
      }
    } catch (error) {
      console.log(error);
    }
  })

  



app.get('/getall',async(req,res)=>{
  try {
    const findData = await jsModel.find({})
    res.status(200).send(findData)
  } catch (error) {
    console.log(error);
  }
})


// router.get('/company/:id',async (req,res)=>{
//   try {
//        const _id = req.params.id
//       const findindividual = await CompanyRecord.findById({_id:_id})
//       res.status(200).send(findindividual)
//       console.log(findindividual );
//   } catch (error) {
//       res.status(400).send(error)
//   }
// }) 

app.get('/getshop',async(req,res)=>{
  try {
    const shop = req.body;
    const findShopDetail = await jsModel.findOne({shop:shop})
    res.status(200).send(findShopDetail)
  } catch (error) {
    console.log(error);
  }
})



  // app.post("/update", async (req, res) => {
  //   try {
  //     const { secondTextEmoji, faviconUrl,firstTextEmoji, icon, firstText, secondText} = req.body;
  //     const shopData = await shopModel.find({shop});
  //     // console.log("shopname==>", shop);
  //     // const id = new ObjectId(shop);
  //     // const produ = await shopModel.find({ shop });
  //     console.log("++++++++++",shopData);
  //     // console.log("connn===>>>>>",produ);
  //     if (!shopData) {
  //       const response = await js.create({
  //         secondTextEmoji,
  //         faviconUrl,
  //         firstTextEmoji,
  //         icon,
  //         firstText,
  //         secondText,
  //       });
  //       res.status(200).json({
  //         msg: "data is stored in database",
  //       });
  //     } else {
  //       const updaterecord = await js.findOneAndUpdate({ shop: shop }, req.body, {
  //         new: true,
  //       });
  //       res.status(200).send(updaterecord);
  //       console.log(updaterecord);
  //       res.json({
  //         msg:"ur detail is already stored in database "
  //       })
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });


const appPort = process.env.PORT || 8080;
app.listen(appPort, () => {
    console.log(`server is running on http://localhost:${appPort}`);
})
