module.exports = {
    port: process.env.PORT || 8080,
    uri: 'mongodb://localhost:27017/' + this.db,
    secret: 'lobster23',
    db: 'report_manager'
}