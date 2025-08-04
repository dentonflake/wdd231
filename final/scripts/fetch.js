const fetchData = async (url) => {

  try {

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Recieved a bad response from: ${url}`)
    }

    return await response.json()

  } catch (error) {

    console.error(`Failed to fetch data from: ${url}`, error)
  }
}

export default fetchData