interface deleteProdcutProps {
  clientToken: string | null,
  clientId: string,
  setdata: () => Promise<void>
}


const deleteProductAction = async (props: deleteProdcutProps) => {
  const res = await fetch('/api/clients', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      utx: props.clientToken,
      clientId: props.clientId
    })
  })
  const content = await res.json();
  await props.setdata();
  console.log(content.message);
  if (content.code === 200) { 
    return true 
  } else {
    return false
  }
}



export {
  deleteProductAction
};