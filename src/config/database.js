module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5434',
  username: 'postgres',
  password: 'lista',
  database: 'lista-compras',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
