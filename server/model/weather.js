class Weather {
    async getRegion(region) {
        const rows  = await db.executeQuery('SELECT * FROM weathers WHERE region = $1', [region]);
        return rows[0]
    }
}