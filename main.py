from flask import Flask, jsonify, render_template,session,request
from dotenv import load_dotenv
import click
import os
import time

load_dotenv()


def roundId():
    id = request.form.get('id')
    session['id'] = id                                
    message = '(' + id + ') id en sesión 1.'
    if session.get('P') == None:      
        session['P'] = '0'
    return jsonify(message=message,id=id)        

def roundID():
    id = session.get('id')
    iD = request.form.get('id')
    session['iD'] = iD                    
    message = '(' + id + ') , (' + iD + ') ids en sesion.'             
    a = float(id)
    b = float(iD)
    RF = a + b
    rf = str(RF)
    results=[1.1, 2.2, 3.3, 4.4, 5.55, 6.66]
    if id == iD:
        same = 1
        session.pop('iD')
        message=str(id) +' ya se ha seleccionado en la ronda actual.'
        return jsonify(message=message,id = id,same=same)
    elif RF in results:
        rfo = 'CORRECTO ' + rf
        p = session.get('P')
        P = str(int(p)+1)
        session['P'] = P
        PA = 'PUNTAJE ACTUAL: ' + P
        appendSessionList(id)
        appendSessionList(iD)
        session.pop('id',None)
        session.pop('iD',None)
        return jsonify(message=message,id=iD,rf=rfo,PA=PA)
    else:
        rfo = 'NO SE ENCUENTRA EN RESULTADOS | id (' + id + ') + iD (' + iD + ') = ' + rf
        session.pop('id',None)
        session.pop('iD',None)
        session['F'] = 1
        F = session.get('F')
        return jsonify(message=message,id=iD,rf = rfo,F=F)

def appendSessionList(item):
    l = session['l']
    l.append(item)
    session['l']=l
    return session['l']

def getStrList():
    l = session['l']
    strList = str(l)
    return strList

def crear_app():
    app = Flask(__name__)
    app.config.from_mapping( 
        SECRET_KEY=os.environ.get('SECRET_KEY'),        
    )

    @app.route('/',methods=('POST','GET'))
    def index():
        session.clear()
        session['l'] = []
        my_rounds=['1','2','3','4','5','6']
        my_l=[0,1,2,3,4,5,6,7,8,9,10,11]
        my_dict = {}
        for round_, pair in zip(my_rounds, zip(my_l[::2], my_l[1::2])):
            my_dict[round_] = pair
        session['my_dict'] = my_dict
        return render_template('index.html')

    @app.route('/get-data',methods=('POST','GET'))
    def get_data():
        if request.method=='POST':
            if session.get('P') == '5':
                if session.get('id'):
                    return roundID()
                else:
                    return roundId()
            if session.get('P') == '4':
                if session.get('id'):
                    return roundID()
                else:
                    return roundId()
            if session.get('P') == '3':
                if session.get('id'):
                    return roundID()
                else:
                    return roundId()
            if session.get('P') == '2':
                if session.get('id'):
                    return roundID()
                else:
                    return roundId()
            if session.get('P'):
                if session.get('id'):
                    return roundID()
                else:
                    return roundId()
            elif session.get('id'):
                return roundID()
            elif request.form.get('id') == 'x':
                id = 1
                session['start'] = id
                message = 'Elige una opcion.'
                return jsonify(message=message)
            elif session.get('start'):
                return roundId()
        elif request.method=='GET':
            if session.get('F'):
                session.pop('F',None)
                return jsonify(message='Vuelve a seleccionar.',rfo='')
            else:
                P = 0            
                session.clear()
                return jsonify(x='')
    return app

app = crear_app()
