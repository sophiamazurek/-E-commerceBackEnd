const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // ****be sure to include its associated Products
//res.send("works");
  Category.findAll({
    include: [Product]
  })
  .then(dbPost => {
    res.json(dbPost);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]

  }).then(dbPost => {
    res.json(dbPost);
  });
});

router.post('/', (req, res) => {
  // create a new category
  console.log(req.body);
  Category.create(
   req.body
  ).then(dbPost => {
    res.json(dbPost);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
     //update userinput
      req.body
    ,
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbPost => {
    res.json(dbPost);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

module.exports = router;
