import React from "react";

export default function Clearfix() {
    return (
        <div className="clearfix">
            <div className="hint-text">Mostrando <b>5</b> de <b>25</b> Demandas</div>
            <ul className="pagination">
                <li className="page-item disabled"><a href="#">Anterior</a></li>
                <li className="page-item"><a href="#" className="page-link">1</a></li>
                <li className="page-item"><a href="#" className="page-link">2</a></li>
                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                <li className="page-item"><a href="#" className="page-link">4</a></li>
                <li className="page-item"><a href="#" className="page-link">5</a></li>
                <li className="page-item"><a href="#" className="page-link">Próxima</a></li>
            </ul>
        </div>
    )
}