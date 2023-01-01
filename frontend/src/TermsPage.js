import React from 'react';
import './TermsPage.css';

function TermsPage() {
return (
<div className="TermsPage">
<header className="TermsPage-header">
<h1>Terms of Service</h1>
</header>
<main>
<p>By using LARRP.ai, you agree to the following terms of service:</p>
<ul>
<li>You will be identified by a unique user signature/ID when using the app.</li>
<li>All intellectual property rights to the input provided by you while using the app will be given to the creator of the app.</li>
</ul>
<button>I Agree</button>
<button onClick={() => window.history.back()}>Back</button>
</main>
</div>
);
}

export default TermsPage;