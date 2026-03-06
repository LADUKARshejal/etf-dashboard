function DescriptionPanel({ prices }) {

  if (!prices || prices.length === 0) return null;

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const support1 = min;
  const support2 = min * 1.02;

  const resistance1 = max * 0.98;
  const resistance2 = max;

  return (

    <div style={{
      marginTop: "30px",
      padding: "25px",
      borderRadius: "12px",
      background: "#f8fafc",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "400px"
    }}>

      <h2 style={{textAlign:"center", color:"#1e3a8a"}}>
        📊 Market Analysis
      </h2>

      {/* Support Section */}

      <div style={{
        background:"#e0f2fe",
        padding:"15px",
        borderRadius:"10px",
        marginTop:"15px"
      }}>

        <h3 style={{color:"#0369a1"}}>🟢 Support Levels</h3>

        <p>Support 1: <b>{support1.toFixed(2)}</b></p>

        <p>Support 2: <b>{support2.toFixed(2)}</b></p>

      </div>


      {/* Resistance Section */}

      <div style={{
        background:"#fee2e2",
        padding:"15px",
        borderRadius:"10px",
        marginTop:"15px"
      }}>

        <h3 style={{color:"#b91c1c"}}>🔴 Resistance Levels</h3>

        <p>Resistance 1: <b>{resistance1.toFixed(2)}</b></p>

        <p>Resistance 2: <b>{resistance2.toFixed(2)}</b></p>

      </div>

    </div>
  );
}

export default DescriptionPanel;